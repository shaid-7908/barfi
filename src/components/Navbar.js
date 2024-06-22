//import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className="absolute top-[30px] w-screen bg-slate-500">
      <div className="container flex mx-auto bg-lime-600">
        <div>LOGO</div>
        <div>
          <ul>
            <Link href={`/`}>
              <li>Home</li>
            </Link>
            <Link href={`/about`}>
              <li>About</li>
            </Link>
            <Link href={`/menu`}>
              <li>Menu</li>
            </Link>
            <Link href={`/contactus`}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar