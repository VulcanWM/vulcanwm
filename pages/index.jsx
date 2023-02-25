import Layout from '../components/layout';

export default function HomePage() {
  return (
    <Layout pageTitle="Home">
      <div id="about">
        <h2>About me</h2>
        <p>I'm a young full-stack developer from the UK.</p>
        <p>I like creating <strong>full stack websites</strong> with <strong>MongoDB</strong> in <strong>Flask</strong> or <strong>Next.js</strong>.</p>
        <p>I also enjoy playing and creating <strong>music</strong>.</p>
      </div>
    </Layout>
  );
}