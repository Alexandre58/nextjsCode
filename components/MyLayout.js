import { UserContext } from "@/Contexts/UserContext";
import { useState } from "react";
useState;
import styles from "./../styles/myLayout.module.css";
import Footer from "./Footer";
import Navigation from "./Navigation";
const MyLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className={styles.myLayout_container_div}>
        <Navigation />
        {children}
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default MyLayout;
