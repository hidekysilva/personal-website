import Link from "next/link";

import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/posts">
        <a>Blog</a>
      </Link>
    </nav>
  );
}
