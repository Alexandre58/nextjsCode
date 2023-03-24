//Context
import React, { useContext } from "react";
import { UserContext } from "@/Contexts/UserContext";
import styles from "@/styles/postcontact.module.css";
import { useRouter } from "next/router";
const dashboard = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  return (
    <div className={styles.container_contact}>
      <h1>
        Dashboard = tableau de bord s'affiche que si l'utisateur est identifié
      </h1>
      <h2 className={styles.h2_router_aspath}>{router.asPath}</h2>
      {user && <h2>Bienvenue sur votre compte</h2>}
      {!user && <h2>Vous devez d'abord vous authentifier.</h2>}
    </div>
  );
};

export default dashboard;
