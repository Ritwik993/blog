import React from 'react'
import styles from "./home.module.css";
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto accusamus commodi omnis, officia laboriosam aperiam, et sequi exercitationem praesentium quibusdam blanditiis adipisci, eum eveniet explicabo illum? Voluptate, nesciunt suscipit?</p>
        <div className={styles.buttonContainer}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>
        <div className={styles.brand}>
          <Image src="/brands.png" fill className={styles.brands}/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" fill/>
      </div>
    </div>
  )
}

export default Home