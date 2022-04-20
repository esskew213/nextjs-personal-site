import React from 'react';

// MUST be used with getStaticProps
// runs at build time, getting the list of paths to be statically generated
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map((user) => {
    return { params: { id: user.id.toString() } };
  });

  return { paths: paths, fallback: false };
};

// destructure params fro the context object
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.json();
  console.log(data);

  return { props: { user: data } };
};

// destructure user from props
const Details = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  );
};

export default Details;
