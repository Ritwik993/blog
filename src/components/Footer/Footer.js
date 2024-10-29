import React from 'react'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Blog website</p>
      <p className={styles.text}>Make your ideas come true © All rights are reserved</p>
    </div>
  )
}

export default Footer