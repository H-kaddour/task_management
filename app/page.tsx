import styles from "./page.module.css";
import Users from "./components/Users"

export default function Home() {
  return (
    <main>
      <h1 className={styles.headerTxt}>List Users</h1>
      <div className={styles.parent}>
        <div className={styles.componentUsers}>
            <div className={styles.userSection}>
              <div className={styles.textHead}>Name</div>
              <div className={styles.textHead}>Username</div>
              <div className={styles.textHead}>Email</div>
            </div>
            <div className={styles.line}></div>
          <Users />
        </div>
      </div>
    </main>
  );
}
