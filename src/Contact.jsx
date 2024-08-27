import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "./utils/utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("assets/contact/emailIcon.png")}
            alt="Email icon"
          />
          <a href="mailto:pavan.gouthu@gmail.com">Surya Gouthu</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("assets/contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/surya-g-04a06691/">
            Surya Gouthu
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("assets/contact/githubIcon.png")}
            alt="Github icon"
          />
          <a href="https://github.com/janakiSurya">Janaki Surya</a>
        </li>
      </ul>
    </footer>
  );
};
