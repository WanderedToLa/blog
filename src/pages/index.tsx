import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { myBlogData }: any = usePluginData('docusaurus-plugin-blog-data');

  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <div className="layout-container">
        <div className="main-container">
          <div>
            <header>
              <Heading as="h1" className="main-title">
                안녕하세요!👋
                <br />
                저는 김우석입니다.
              </Heading>
              <p className="main-description">
                서울에서 프론트엔드 개발자로 일하고 있으며 <br />
                좋은 가치는 좋은 개발경험에서 나온다고 생각합니다
                <br />
                공부하며 새로 알게된 정보들은 이곳에 정리하거나&nbsp;
                <br />
                <Link to={'https://github.com/WanderedToLa/aweseom-articles'}>따로 모아 관리하고</Link>
                <br />
                WebAssembly기반의 웹 생태계를 주목하고 있습니다.
              </p>
            </header>
            <main className="main">
              <h2 className="post-title">Recent Posts</h2>
              <ul className="post-list-container">
                {myBlogData?.map((post) => (
                  <li key={post.slug}>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    {post.date}
                  </li>
                ))}
              </ul>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}
