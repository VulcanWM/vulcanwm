import Layout from '../components/layout';

export default function HomePage() {
  return (
    <Layout pageTitle="Home">
      <div id="about">
        <h2>About me</h2>
        <p>I'm a <strong>16-year-old full-stack developer</strong> from the UK who loves <strong>building and launching projects fast</strong>.</p>
        <p>Lately, I’ve been focused on <strong>shipping products</strong>, <strong>learning how to attract real users</strong>, and figuring out <strong>what makes people pay</strong>.</p>
        <p>I'm also into <strong>music</strong>, and I’m especially interested in building <strong>websites that blend tech and creativity</strong> — tools that help people make or explore sound.</p>
          <p>I mostly build with <strong>Next.js</strong>, <strong>MongoDB</strong>, and <strong>Tailwind</strong> — tools I know well and can move fast with.</p>
          <p><strong>Always experimenting. Always learning.</strong></p>
      </div>
    </Layout>
  );
}