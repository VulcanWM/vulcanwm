import { useState } from 'react';
import Layout from '../components/layout';

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <Layout>
      <div id="about">
        <h2>About me</h2>
        <p>I'm a 13 year old full-stack developer from the UK.</p>
        <h2>Tech Stack</h2>
        <p>My main language is <strong>Python</strong> - I really like <strong>Flask</strong> - and I use <strong>HTML, JS and CSS</strong> for frontend for my projects.</p>
        <p>I like making games with <strong>Kaboom.JS</strong> and I often use <strong>Express.JS</strong> with <strong>ReplitDB</strong> to add other functions to my games.</p>
        <p>I use databases a lot in my projects, and it's usually <strong>MongoDB</strong>.</p>
        <p>I also have some knowledge of <strong>Swift</strong>, and can make simple iOS apps.</p>
      </div>
    </Layout>
  );
}