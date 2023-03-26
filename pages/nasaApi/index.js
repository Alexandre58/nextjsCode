import React from "react";
import styles from "../../styles/accueilNasa.module.css";
import Link from "next/link";
import Image from "next/image";
//appel a l'api Nasa
export async function getServerSideProps() {
  const dataNasa = await fetch(
    "https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=DEMO_KEY"
  );
  const results = await dataNasa.json();

  return {
    props: {
      results,
    },
  };
}

const accueilNasa = (props) => {
  return (
    <section className={styles.accueilNasa_section_container}>
      <h1>accueil nasa de index.js</h1>
      <Link href="/nasaApi/appelServerApi">
        <h1>AppelServerApi...click here</h1>
        <p>{props.results[0].date}</p>
      </Link>
      <ul>
        {props.results.map((nasa) => {
          return (
            <li key={nasa.identifier}>
              <p>Date: {nasa.date}</p>
              <p>Latitude: {nasa.centroid_coordinates.lat}</p>
              <p>Longitude: {nasa.centroid_coordinates.lat}</p>
              <p>Légende: {nasa.caption}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default accueilNasa;
