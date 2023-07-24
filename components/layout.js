import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';

export const siteTitle = "VulcanWM's Portfolio";

export default function Layout({ pageTitle, children }) {
  const title = `VulcanWM - ${pageTitle}`;
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="VulcanWM is a 13 year old full-stack developer from the UK who uses Python, Flask, HTML, CSS, JS, MongoDB and Swift to build fun and useful projects."
        />
        <meta
          property="og:image"
          content="/logo.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://vulcanwm.is-a.dev" />
        <meta property="og:site_name" content="VulcanWM's Portfolio" />
        <meta name="robots" content="index, follow"/>
        <meta property="og:type" content="Portfolio" />
        <meta name="google-site-verification" content="sHMC0fTdYND3r1nBJCPQp869TDwrMNjo7IhpsbMcnl0" />
        <meta name="google-site-verification" content="d3cd3FIDhsMDI3e_zwDnkg4GLGdu-cJu23VVpa-eC6o" />
        <title>{title}</title>
      </Head>
      <div className={styles.header}>
        <h1>Hi I'm VulcanWM!</h1>
      </div>
      <div className={styles.navbar} id="navbar">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">My Projects</Link>
        <Link href="/skills">My Skills</Link>
      </div>
      <main>{children}</main>
      <Analytics />
    </div>
  );
}
