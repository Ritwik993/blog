import React, { Suspense } from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import { getPost } from "@/lib/data";
import User from "@/components/User/User";

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  console.log(post);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={post.img} alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1>{post.title}</h1>
        {post && (
          <Suspense fallback={<div>Loading...</div>}>
            <User userId={post.userId} />
          </Suspense>
        )}
        <div className={styles.textdesc}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
