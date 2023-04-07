import Layout from '../components/layout';

export default function HomePage() {
  return (
    <Layout pageTitle="Home">
      <div id="about">
        <h2>About me</h2>
        <p>I'm a young <strong>full-stack developer</strong> from the UK who codes for <strong>fun</strong>.</p>
        <p>I like creating websites with <strong>MongoDB</strong> in <strong>Flask</strong> or <strong>Next.js</strong>.</p>
        <p>I also like developing apps with <strong>React Native</strong> and <strong>Expo</strong>.</p>
        <p>I'm a <strong>trusted member</strong> and <strong>tag moderator</strong> at <a target="_blank" href="https://dev.to">dev.to</a>.</p>
        <p>I enjoy playing and creating <strong>music</strong>.</p>
      </div>
    </Layout>
  );
}
