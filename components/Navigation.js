import React from "react";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";
const Navigation = () => {
  const id = "article";
  return (
    <div className={styles.navigation_container}>
      <Link className={styles.navigation_Link} href="/">
        Accueil
      </Link>
      <Link className={styles.navigation_Link} href="/posts/contact">
        posts/contact
      </Link>
      <Link className={styles.navigation_Link} href="/posts/first-post">
        First Post
      </Link>
      <Link className={styles.navigation_Link} href={`/posts/${id}`}>
        router
      </Link>

      <Link className={styles.navigation_Link} href="/contact">
        Contact
      </Link>
      <Link className={styles.navigation_Link} href="/posts">
        Dosssier Posts (index.js)
      </Link>
    </div>
  );
};

export default Navigation;
