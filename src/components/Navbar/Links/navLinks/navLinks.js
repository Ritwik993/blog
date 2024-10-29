"use client";
import Link from "next/link";
import styles from "./navLinks.module.css";
import { usePathname } from "next/navigation";

const NavLinks = ({ item }) => {
  const path = usePathname();
  return (
    <Link
      href={item.path}
      key={item.title}
      className={`${styles.container} ${path === item.path && styles.active}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLinks;
