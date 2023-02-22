import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import { NavLink } from 'react-router-dom';

export const siteTitle = "VulcanWM's Portfolio";

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="VulcanWM is a 13 year old full-stack developer from the UK who uses Python, Flask, HTML, CSS, JS, MongoDB and Swift to build fun and useful projects."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>VulcanWM - {pageTitle}</title>
      </Head>
      <div className={styles.header}>
        <h1>Hi I'm VulcanWM!</h1>
      </div>
      <div className={styles.navbar} id="navbar">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">My Projects</Link>
        <Link href="/newsletter">Newsletter</Link>
      </div>
      <main>{children}</main>
    </div>
  );
}