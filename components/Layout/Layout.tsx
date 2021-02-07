import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.content}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
