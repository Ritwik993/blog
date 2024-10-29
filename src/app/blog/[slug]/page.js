import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/14602906/pexels-photo-14602906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1>Title</h1>
        <div className={styles.author_details}>
            <Image
              src="/noavatar.png"
              alt=""
              width={30}
              height={30}
              className={styles.avatar}
            />
        
          <div className={styles.description}>
            <span>Author</span>
            <span>Ritwik Bhagat</span>
          </div>
          <div className={styles.timeline}>
            <span>Published</span>
            <span>12.03.24</span>
          </div>
        </div>
        <div className={styles.textdesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          soluta magni facere assumenda, velit iste ipsa magnam nulla ullam aut
          at impedit dolorum, nemo obcaecati consequatur pariatur reiciendis,
          inventore natus!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
