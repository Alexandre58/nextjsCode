import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/postcontact.module.css";

import img4 from "../public/assets/img4.jpg";
import img5 from "../public/assets/img5.jpg";
import Image from "next/image";
export async function getStaticProps() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20"
  ).then((response) => response.json());

  return {
    props: {
      posts,
    },
  };
}
export default function Home({ posts }) {
  const router = useRouter();
  //date du jour
  const myDate = new Date().toLocaleDateString("fr");
  return (
    <>
      <Head>
        <title>next apprentissage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container_contact}>
        <section>
          <h1>Pages accueil index</h1>
          <br />
          <hr />
          <h2 className={styles.h2_router_aspath}>
            http://localhost:3000{router.asPath}
          </h2>
          <hr />
          <br></br>
          <Image
            className={styles.index_img4}
            placeholder="blur"
            src={img4}
            alt="image Thierry"
            width={585}
            height={599}
          />
          <h2>Date du jour: {myDate}</h2>
        </section>

        <ul className={styles.post_ul}>
          {posts.map((post) => {
            return (
              <li className={styles.li_index} key={post.id}>
                <Link
                  className={styles.link_postsIndex}
                  href={`/posts/${post.id}`}
                >
                  <Image
                    className={styles.index_img5}
                    src={img5}
                    placeholder="blur"
                    alt="image Thierry"
                    width={375}
                    height={375}
                  />
                  <h1 className={styles.index_h1}>
                    {post.id} - {post.title}
                  </h1>
                  <h2 className={styles.index_h2}>{post.title}</h2>
                  <p>{post.body}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
