import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

function NavBar() {
  const router = useRouter();
  const style = {
    backgroundColor: "var(--secondary-accent-colour)"
  };

  const homeClick = () => {
    router.push("/");
  };

  const postsClick = () => {
    router.push("/timeline");
  };

  return (
    <nav className={styles.nav}>
      <a onClick={homeClick} style={router.pathname === "/" ? style : null}>
        Home
      </a>
      <a onClick={postsClick} style={router.pathname === "/timeline" ? style : null}>
        Timeline
      </a>
    </nav>
  );
}

export default NavBar;
