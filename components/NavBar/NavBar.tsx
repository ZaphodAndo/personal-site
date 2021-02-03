import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="posts">Posts</Link>
    </nav>
  );
}

export default NavBar;
