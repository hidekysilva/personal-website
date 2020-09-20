import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hideky's website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            There are a few projects I plan to get started on pretty soon. Check
            periodically for updates.
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

      <footer className={styles.footer}>This is a Work In Progess</footer>
    </div>
  );
}
