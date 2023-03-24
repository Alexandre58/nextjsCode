//Context
import React, { useContext } from "react";
import { UserContext } from "@/Contexts/UserContext";
//Link
import Link from "next/link";
//CSS
import styles from "../styles/Navigation.module.css";
//import le rooter pour que les lien dans la navbarre soient en gras quand on est sur la page
import { useRouter } from "next/router";
const Navigation = () => {
  /**CONTEXT */
  const { user, setUser } = useContext(UserContext);
  /**fin CONTEXT */
  const id = "article";
  //bouton quitter
  const quitter = () => {
    setUser(null);
  };
  //import le rooter pour que les lien dans la navbarre soient en gras quand on est sur la page
  const router = useRouter();
  const handleClick = (e) => {
    console.log("navBar couleur");
    console.log(e);
    console.log(router.asPath);
  };
  return (
    <nav className={styles.navigation_container}>
      <Link
        className={
          router.pathname === "/" ? styles.active : styles.navigation_Link
        }
        href="/"
      >
        Accueil
      </Link>
      <Link
        className={
          router.pathname === "/posts/contact"
            ? styles.active
            : styles.navigation_Link
        }
        href="/posts/contact"
      >
        posts/contact
      </Link>
      <Link
        className={
          router.pathname === "/posts/first-post"
            ? styles.active
            : styles.navigation_Link
        }
        href="/posts/first-post"
      >
        First Post
      </Link>
      <Link
        className={
          router.pathname === `/posts/${id}`
            ? styles.active
            : styles.navigation_Link
        }
        href={`/posts/${id}`}
      >
        router
      </Link>

      <Link
        className={
          router.pathname === "/contact"
            ? styles.active
            : styles.navigation_Link
        }
        href="/contact"
      >
        Contact
      </Link>
      <Link
        className={
          router.pathname === "/posts" ? styles.active : styles.navigation_Link
        }
        href="/posts"
      >
        Dosssier Posts (index.js)
      </Link>
      {!user && (
        <Link
          className={
            router.pathname === "/user/auth"
              ? styles.active
              : styles.navigation_Link
          }
          href="/user/auth"
        >
          Connectez-vous
        </Link>
      )}
      {user && (
        <Link
          className={
            router.pathname === "/dashboard"
              ? styles.active
              : styles.navigation_Link
          }
          href="/dashboard"
        >
          Dashboard
        </Link>
      )}

      {user && (
        <button className={styles.navigation_Link_connection} onClick={quitter}>
          Bonjour <strong>{user}</strong> , déconnexion
        </button>
      )}
    </nav>
  );
};

export default Navigation;
