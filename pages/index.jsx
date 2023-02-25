import Layout from '../components/layout';

export default function HomePage() {
  return (
    <Layout pageTitle="Home">
      <div id="about">
        <h2>About me</h2>
        <p>I'm a young <strong>full-stack developer</strong> from the UK who codes for <strong>fun</strong>.</p>
        <p>I like creating websites with <strong>MongoDB</strong> in <strong>Flask</strong> or <strong>Next.js</strong>.</p>
        <p>I also enjoy playing and creating <strong>music</strong>.</p>
      </div>
    </Layout>
  );
}