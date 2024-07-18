const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');

async function createBlogDataPlugin(context, options) {
  return {
    name: 'docusaurus-plugin-blog-data',

    async loadContent() {
      const blogDir = path.join(context.siteDir, 'blog');
      let files;

      try {
        files = await fs.readdir(blogDir);
      } catch (error) {
        console.error(`Error reading blog directory: ${error}`);
        return [];
      }

      const posts = [];

      for (const file of files) {
        const filePath = path.join(blogDir, file);
        let stat;

        try {
          stat = await fs.stat(filePath);
        } catch (error) {
          console.error(`Error reading file stats: ${error}`);
          continue;
        }

        if (stat.isDirectory()) {
          const indexFilePath = path.join(filePath, 'index.md');
          try {
            const content = await fs.readFile(indexFilePath, 'utf-8');
            const frontMatter = matter(content).data;
            if (frontMatter.slug && frontMatter.title) {
              const dateStr = file.split('-').slice(0, 3).join('-');
              const dateObj = new Date(dateStr);

              posts.push({
                slug: frontMatter.slug,
                title: frontMatter.title,
                date: dateObj,
              });
            }
          } catch (error) {
            console.error(`Error processing file ${indexFilePath}: ${error}`);
          }
        }
      }

      posts.sort((a, b) => b.date - a.date);

      return posts.slice(0, 5).map((post) => ({
        ...post,
        date: post.date.toISOString().split('T')[0],
      }));
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ myBlogData: content });
    },
  };
}

module.exports = createBlogDataPlugin;
