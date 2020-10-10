import Head from "next/head";

import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hideky's website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome</h1>
        <div className={styles.grid}>
          <p className={styles.description}>
            My name is Hideky. I am a web developer during the day, independent
            researcher at night.
          </p>
          <p className={styles.description}>
            Some of my passions are: computer science, soccer, videogames, math
            and physics (in no particular order).
          </p>
          <p className={styles.description}>
            I am working on a few projects. Check periodically for updates.
          </p>
        </div>
        <img
          className={styles.image}
          src="/profile-picture-large.jpg"
          alt="Hideky's profile picture"
          srcSet="/profile-picture-small.jpg 480w,
          /profile-picture-large.jpg 800w"
          sizes="(max-width: 600px) 480px,
            800px"
        />
      </main>

      <footer className={styles.footer}>
        <div className={styles.iconBox}>
          <a href="https://github.com/hidekysilva">
            <img className={styles.icon} src="/github.svg" alt="Github icon" />
          </a>
          <a href="https://twitter.com/hidekysilva">
            <img
              className={styles.icon}
              src="/twitter.svg"
              alt="Twitter icon"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
