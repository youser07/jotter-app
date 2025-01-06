import React from "react";
import styles from "./Footer.module.css"; // Import the CSS module

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
