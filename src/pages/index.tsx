import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <div className="layoutContainer">
        <div className="container">
          <header>
            <Heading as="h1" className="main-title">
              안녕하세요!👋
              <br />
              저는 김우석입니다.
            </Heading>
            <p className="main-description">~~~입니다.</p>
          </header>
          <main>
            <h2>Recent Posts</h2>
          </main>
        </div>
      </div>
    </Layout>
  );
}
