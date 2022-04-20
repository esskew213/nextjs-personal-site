import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log('GOT DATA', data);
  return { props: { users: data } };
};

const Ninjas = ({ users }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {users.map((user) => (
        <Link key={user.id} href={`/ninjas/${user.id}`}>
          <a className={styles.single}>{user.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
