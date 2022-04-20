import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'>
          <a>
            <Image src='/kuehlogo.png' alt='kueh-logo' width={64} height={64} />
          </a>
        </Link>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninjas</a>
      </Link>
    </nav>
  );
};

export default Navbar;
