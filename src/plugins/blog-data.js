const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
async function createBlogDataPlugin(context, options) {
  return {
    name: 'docusaurus-plugin-blog-data',
    async loadContent() {
      const blogDir = path.join(__dirname, '../../blog');
      const files = fs.readdirSync(blogDir);
      const posts = [];
      files.forEach((file) => {
        const filePath = path.join(blogDir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          const indexFilePath = path.join(filePath, 'index.md');
          if (fs.existsSync(indexFilePath)) {
            const content = fs.readFileSync(indexFilePath, 'utf-8');
            const frontMatter = matter(content).data;
            if (frontMatter.slug && frontMatter.title) {
              const dateStr = file.split('-').slice(0, 3).join('-');
              posts.push({
                slug: frontMatter.slug,
                title: frontMatter.title,
                date: dateStr,
              });
            }
          }
        }
      });
      posts.sort((a, b) => b.date - a.date);
      return posts.slice(0, 5);
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ myBlogData: content });
    },
  };
}
module.exports = createBlogDataPlugin;
