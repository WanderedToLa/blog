import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <div className="layout-container">
        <div className="container">
          <header>
            <Heading as="h1" className="main-title">
              안녕하세요!👋
              <br />
              저는 김우석입니다.
            </Heading>
            <p className="main-description">
              서울에서 프론트엔드 개발자로 일하고 있으며 <br />
              높은 생산성 ~~~~ 이라고 생각합니다.
            </p>
          </header>
          <main className="main">
            <Link to={'./blog'} className="post-title">BLOG 바로가기</Link>
          </main>
        </div>
      </div>
    </Layout>
  );
}
