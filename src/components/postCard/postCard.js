import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image src="https://images.pexels.com/photos/14586964/pexels-photo-14586964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={styles.img} fill/>
                </div>
                <span className={styles.date}>12.08.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, et corporis quo non aspernatur ratione nobis. Quibusdam, voluptatum cupiditate! Deserunt aliquid aspernatur quidem dolorum illum cupiditate, qui ea quod architecto.</p>
                <Link href="/blog/post" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default PostCard;