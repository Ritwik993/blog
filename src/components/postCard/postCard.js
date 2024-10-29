import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard=({post})=>{
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image src={post.img} alt="" className={styles.img} fill/>
                </div>
                <span className={styles.date}>12.08.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.desc}</p>
                <Link href={`/blog/${post.slug}`} className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default PostCard;