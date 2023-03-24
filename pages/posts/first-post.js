import React from "react";
import styles from "../../styles/first-post.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
export async function getStaticProps() {
  const data = await import(`../api/users.json`);
  const arrayNames = data.users;
  //if arrayNames vide redirection page 404 données users vide
  if (arrayNames.length === 0) {
    return {
      //notFound: true, OU
      redirect: {
        destination: "/404DonneesVide",
      },
    };
  }
  return {
    props: {
      arrayNames,
    },
  };
}
const FirstPost = (props) => {
  const router = useRouter();
  console.log(props);
  return (
    <>
      <Head>
        <title>lien vers google</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1>
          First-post: appel dela liste de nom de api user.json crée dans ce
          fichier
        </h1>
        <br></br>
        <hr />
        <h2 className={styles.h2_router_aspath}>
          http://localhost:3000{router.asPath}
        </h2>
        <br></br>
        <hr></hr>
        <h2>
          <a href="http://google.com" target="_blank">
            click here for:** ALLER A GOOGLE**
          </a>
        </h2>
        {props.arrayNames.map((names) => {
          return (
            <li className={styles.li} key={names.id}>
              <h3>
                Votre prenom: <span>{names.firstname}</span>
              </h3>
              <h3>
                {" "}
                Nom de famille:<span> {names.name}</span>
              </h3>
              <hr></hr>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default FirstPost;
