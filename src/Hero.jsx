import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "./utils/utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Surya</h1>
        <p className={styles.description}>
          I'm a passionate software engineer with expertise in building scalable
          web applications using React, Node.js, and other modern technologies.
          Let's connect and explore opportunities!
        </p>
        <a href="mailto:pavan.gouthu@gmail.com" className={styles.contactBtn}>
          Get in Touch
        </a>
      </div>
      <img
        src="/assets/hero/heroImage 1.png" // Absolute path relative to public directory
        alt="Surya hero"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
