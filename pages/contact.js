import React from "react";
import styles from "../styles/postcontact.module.css";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import img1 from "../public/assets/img1.jpg";
import img2 from "../public/assets/img2.jpg";
import img3 from "../public/assets/img3.jpg";
import img5 from "../public/assets/img5.jpg";
import img4 from "../public/assets/img4.jpg";
const Contact = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>contacter nous</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container_contact}>
        <h1>Bienvenu de contact.js dans pages</h1>
        <hr></hr>
        <h2 className={styles.h2_router_aspath}>
          http://localhost:3000{router.asPath}
        </h2>
        <hr></hr>
        <div className={styles.index_container_image}>
          <Image
            className={styles.index_img123}
            placeholder="blur"
            src={img4}
            alt="image Thierry"
            width="585"
            height="599"
          />
          <Image
            className={styles.index_img123}
            src={img5}
            placeholder="blur"
            alt="image Thierry"
            width="375"
            height="375"
          />
          <Image
            className={styles.index_img123}
            src={img1}
            placeholder="blur"
            alt="image Thierry"
            width="640"
            height="383"
          />
          <Image
            className={styles.index_img123}
            src={img2}
            placeholder="blur"
            alt="image Thierry"
            width="640"
            height="960"
          />
          <Image
            className={styles.index_img123}
            src={img3}
            placeholder="blur"
            alt="image Thierry"
            width="640"
            height="960"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
