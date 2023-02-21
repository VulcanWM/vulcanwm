import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';

export const siteTitle = "VulcanWM's Portfolio";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
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
      </Head>
      <div className={styles.header}>
        <h1>Hi I'm VulcanWM!</h1>
      </div>
      <div className={styles.navbar} id="navbar">
        <a className={[styles.navlink,styles.navlinkltr].join(' ')} href="/">Home</a>
        <a className={[styles.navlink,styles.navlinkltr].join(' ')} href="/contact">Contact</a>
        <a className={[styles.navlink,styles.navlinkltr].join(' ')} href="/projects">My Projects</a>
        <a className={[styles.navlink,styles.navlinkltr].join(' ')} href="/newsletter">Newsletter</a>
      </div>
      <main>{children}</main>
    </div>
  );
}