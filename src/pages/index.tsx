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
              문제 자체를 해결하는 것에 흥미를 느끼고
              <br />
              좋은 가치를 만들어 내기위해 좋은 개발경험이 뒤따라야 한다고
              생각합니다.
              <br />
              공부하며 새로 알게된 정보들은 이곳에 정리하거나&nbsp;
              <Link to={"https://github.com/WanderedToLa/Awesome-FE-Engineers"}>
                따로 모아서 관리하고 있습니다.
              </Link>
              <br />
              또한 앞으로 WebAssembly를 기반으로한 웹 생태계를 주목하고
              있습니다.
            </p>
          </header>
          <main className="main">
            <h2 className="post-title">Recent Posts</h2>
            <ul className="post-list-container">
              <li>
                <Link to={""}>게시글 1</Link>
              </li>
              <li>
                <Link to={""}>게시글 1</Link>
              </li>
              <li>
                <Link to={""}>게시글 1</Link>
              </li>
              <li>
                <Link to={""}>게시글 1</Link>
              </li>
              <li>
                <Link to={""}>게시글 1</Link>
              </li>
            </ul>
          </main>
        </div>
      </div>
    </Layout>
  );
}
