'use client';
import { useRouter } from 'next/navigation';
import styles from "../page.module.css";

interface Userdata {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface UsersClickProps {
  user: Userdata;
  index: number;
}

function UsersClick({user, index}: UsersClickProps) {
  const router = useRouter();
  const handleClick = (id: any) => {
    router.push(`/${id}`);
  }

  return (
    <>
      <div className={(index % 2 == 1) ? styles.highlightUser : ''}>
      <div key={user.id} className={styles.userSection} onClick={() => {handleClick(user.id)}}>
        <div className={styles.textBody}>{user.name}</div>
        <div className={styles.textBody}>{user.username}</div>
        <div className={styles.textBody}>
          {user.email.length > 20 ? user.email.substr(0, 17) + '...' : user.email}
        </div>
        </div>
      </div>
    </>
  );
}

export default UsersClick;
