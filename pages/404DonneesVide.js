import Navigation from "@/components/Navigation";
import Link from "next/link";
import React from "react";
import styles from "../styles/postcontact.module.css";
const donneesVideUsers = () => {
  return (
    <>
      <Navigation />
      <div className={styles.container_contact}>
        <h1>Les données sont vides merci de retourner à l'accueil</h1>
        <Link href={"/"}>Accueil</Link>
      </div>
    </>
  );
};

export default donneesVideUsers;
