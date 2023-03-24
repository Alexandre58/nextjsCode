import { useRouter } from "next/router";

import React from "react";
import styles from "@/styles/postcontact.module.css";
import Link from "next/link";
export async function getStaticProps({ params }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((response) => response.json());

  return {
    props: {
      post,
    },
  };
}
export async function getStaticPaths() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20"
  ).then((response) => response.json());

  return {
    paths: posts.map((post) => ({
      params: {
        id: post.id.toString(),
      },
    })),
    fallback: false,
  };
}

const post = ({ post }) => {
  const router = useRouter();

  return (
    <>
      <main className={styles.container_id}>
        <h1>[id].js</h1>
        <h2 className={styles.h2_router_aspath}>
          http://localhost:3000{router.asPath}
        </h2>
        <Link className={styles.id_h1} href="/">
          Revenir à l'accueil sachant que vous avez la navBar sur le coté pour
          le faire , andouille !!!
        </Link>
        <h1>nous sommes sur l'article {router.query.id}</h1>
        <h2 className={styles.h2_id}>Titre de l'article</h2>
        <h2>{post.title}</h2>
        <h2 className={styles.h2_id}>Descrition</h2>
        <p>{post.body}</p>
      </main>
    </>
  );
};

export default post;
