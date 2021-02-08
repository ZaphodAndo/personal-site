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
      <a onClick={homeClick} onKeyDown={homeClick} style={router.pathname === "/" ? style : null} tabIndex={0}>
        Home
      </a>
      <a
        onClick={postsClick}
        onKeyDown={postsClick}
        style={router.pathname === "/timeline" ? style : null}
        tabIndex={0}
      >
        Timeline
      </a>
    </nav>
  );
}

export default NavBar;
