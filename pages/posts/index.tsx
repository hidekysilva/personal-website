import NavBar from "../../components/navbar";

import styles from "../../styles/Posts.module.css";

export default function FirstPost() {
  return (
    <div className={styles.container}>
      <NavBar />
      <h1 className={styles.title}>Blog</h1>
      <main className={styles.main}>
        <p>Work in progress...</p>
      </main>
    </div>
  );
}
