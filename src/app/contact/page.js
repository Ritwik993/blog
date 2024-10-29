import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" className={styles.img} fill />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.formBox}>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="Name and Surname"
            required
          />
          <input
            type="email"
            className={styles.inputBox}
            placeholder="Email Address"
            required
          />
          <input
            type="number"
            className={styles.inputBox}
            placeholder="phone number (optional)"
          />
          <textarea className={styles.textBox} placeholder="Message" cols={30} rows={10} />
          <button className={styles.button} >Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
