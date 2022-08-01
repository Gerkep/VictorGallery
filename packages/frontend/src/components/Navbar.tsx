import type { NextPage } from 'next'
import Link from 'next/link'

const Navbar: NextPage = () => {
  return (
    <>
      <div className="navbar">
        <Link href="/">
          <div className="logo"></div>
        </Link>
        <div className="hamburger-btn">
          <div className="hamburger"></div>
        </div>
        <div className="menu">
          <div className="mobile-menu-items">
            <Link href="/collection">
              <p className="mobile-menu-link">Artworks</p>
            </Link>
            <Link href="/events">
              <p className="mobile-menu-link" id="link">
                <b>Events</b>
              </p>
            </Link>
          </div>
        </div>
        <div className="navbar-links">
          <Link href="/collection">
            <p className="navbar-desktop-link">Artworks</p>
          </Link>
          <Link href="/events">
            <p className="navbar-desktop-link event-navbar-link">Events</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
