import UsersClick from './UsersClick';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

async function Users() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_USER}`);
  if (!res.ok)
    return <h1>Error</h1>;
  const data: User[] = await res.json();

  return (
    <>
      {data.map((user, index) => (
        <UsersClick user={user} index={index} />
      ))}
    </>
  );
}

export default Users;
