"use client";
import Image from "next/image";
import styles from "./links.module.css";
import NavLinks from "./navLinks/navLinks";
import { useState } from "react";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

//temporary
const session = true;
const isAdmin = true;

const Links = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return <NavLinks item={link} key={link.title} />;
        })}
        {session ? (
          <>
            {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLinks item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {/* <button className={styles.openBtn} >Menu</button> */}
      <Image src="/menu.png"  className={styles.openBtn} width={30} height={30} onClick={() => setOpen((prev) => !prev)}/>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => {
            return <NavLinks item={link} key={link.title} />;
          })}
          {session ? (
            <>
              {isAdmin && (
                <NavLinks item={{ title: "Admin", path: "/admin" }} />
              )}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLinks item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
