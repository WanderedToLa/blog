import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

type a = 'A' | 'B' | 'C';
export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  function test(a: a, b: string) {
    return a + b;
  }

  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <div className="layout-container">
        <div className="container">
          <div style={{ padding: '2.5rem' }}>
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
                <Link to={'https://github.com/WanderedToLa/Awesome-FE-Engineers'}>따로 모아서 관리하고 있습니다</Link>
                <br />
                또한 앞으로 WebAssembly를 기반으로한
                <br /> 웹 생태계를 주목하고 있습니다.
              </p>
            </header>
            <main className="main">
              {test('D', 'abc')}
              <h2 className="post-title">Recent Posts</h2>
              <ul className="post-list-container">
                <li>
                  <Link to={''}>게시글 1</Link>
                </li>
                <li>
                  <Link to={''}>게시글 1</Link>
                </li>
                <li>
                  <Link to={''}>게시글 1</Link>
                </li>
                <li>
                  <Link to={''}>게시글 1</Link>
                </li>
                <li>
                  <Link to={''}>게시글 1</Link>
                </li>
              </ul>
            </main>
          </div>
        </div>
        <div className="right-container">sdf</div>
      </div>
    </Layout>
  );
}
