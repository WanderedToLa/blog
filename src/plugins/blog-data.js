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
                date: new Date(dateStr), // Date 객체로 변환
              });
            }
          }
        }
      });

      // 날짜를 기준으로 내림차순 정렬 (최신 날짜가 앞으로)
      posts.sort((a, b) => b.date - a.date);

      // 상위 5개 포스트만 선택하고 날짜를 문자열로 변환
      return posts.slice(0, 5).map((post) => ({
        ...post,
        date: post.date.toISOString().split('T')[0], // 'YYYY-MM-DD' 형식으로 변환
      }));
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ myBlogData: content });
    },
  };
}

module.exports = createBlogDataPlugin;
