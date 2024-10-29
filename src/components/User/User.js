import Image from "next/image";
import styles from "./user.module.css";
import { getUser } from "@/lib/data";

const User = async ({ userId }) => {
  const user = await getUser(userId);
  console.log(user)
  return (
    <div className={styles.author_details}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={30}
        height={30}
        className={styles.avatar}
      />
      <div className={styles.description}>
        <span>Author</span>
        <span>{user?.username}</span>
      </div>
      <div className={styles.timeline}>
        <span>Published</span>
        <span>12.03.24</span>
      </div>
    </div>
  );
};

export default User;
