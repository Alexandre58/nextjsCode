import { UserContext } from "@/Contexts/UserContext";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import styles from "../../styles/form.module.css";
const Auth = () => {
  const [userName, setUserName] = useState("");
  //import de setUse du context
  const { setUser } = useContext(UserContext);
  //utilisation du rooter pour renvoyé l'utilisateur authentifié sur une page définie
  const router = useRouter();
  const handleonSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      setUser(userName);
      router.push("/");
    }
  };
  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div className={styles.form_container_div}>
      <h2 className={styles.h2_router_aspath}>
        http://localhost:3000{router.asPath}
      </h2>
      <form className={styles.form_container} onSubmit={handleonSubmit}>
        <input
          className={styles.form_input}
          type="text"
          onChange={handleChange}
        />
        <button className={styles.form_button}>Entrer</button>
      </form>
    </div>
  );
};

export default Auth;
