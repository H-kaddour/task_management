import styles from "../page.module.css";
import Tasks from "../components/Tasks";
import Link from "next/link";

interface Params {
  id: string;
}

function taskById({params}: {params: Params}) {
  const { id } = params;
  return (
    <>
      <h1 className={styles.headerTxt}>Task {id}</h1>
      <div className={styles.parent}>
        <div className={styles.componentUsers}>
          <div className={styles.userSection}>
            <div className={styles.textHead}>Title</div>
            <div className={styles.textHead}>Status</div>
          </div>
          <div className={styles.line}></div>
          <Tasks id={id} />
        </div>
      </div>
      <br />
      <Link href='/' className={styles.link}><div >Go back</div></Link>
    </>
  );
}

export default taskById;
