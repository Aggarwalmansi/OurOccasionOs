'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../booking/styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        
        {/* Logo (Left Corner) */}
        <Link href="/" className="logo">
          <div className="logo-image">
            <Image
              src="/logo.png"
              alt="OccasionOS Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <span className="logo-text">OccasionOS</span>
        </Link>

        {/* Right Side: Nav Links + Book Button */}
        <div className="nav-right">
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/booking/caterer-profile">Browse Caterers</Link></li>
            <li><Link href="/booking/occasion">Plan Event</Link></li>
          
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          
          <Link href="/login">
            <button className="book-now-btn">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
