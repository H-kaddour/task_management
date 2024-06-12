import styles from "../page.module.css";

interface Task {
  id: string;
  title: string;
  completed: string;
}

interface Userid {
  id: string;
}

async function Tasks({id}: Userid) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_TASK}${id}`);
  if (!res.ok)
    return <h1>Error</h1>;
  const data: Task[] = await res.json();

  return (
    <>
      {data.length === 0 ? (
        <div key="not found" className={styles.userSection}>
          <div className={styles.textBody}>Not Found</div>
        </div>
      ) : (
      data.map((user, index) => (
        <div key={user.id} className={(index % 2 === 1) ? styles.highlightUser : ''}>
          <div key={user.id} className={styles.userSection}>
            <div className={styles.textBody}>{user.title}</div>
            <div className={styles.textBody}>
            {user.completed ? "Complete" : "Uncomplete" }</div>
          </div>
        </div>
      )))
      }
    </>
  );
}

export default Tasks;
