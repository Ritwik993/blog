import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          {" "}
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <div className={styles.num}>10K+</div>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <div className={styles.num}>10K+</div>
            <p>Year of Experience</p>
          </div><div className={styles.box}>
            <div className={styles.num}>10K+</div>
            <p>Year of Experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" className={styles.img} fill />
      </div>
    </div>
  );
};

export default page;
