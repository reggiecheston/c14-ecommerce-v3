import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to open menu
  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Function to close menu
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <header className="main-header">
        <nav className="main-header__navbar">
          <ul className="main-header__navbar--items">
            <li className="main-header__navbar--item">
              <div className="hamburger-menu" onClick={openMenu}>
                <span className="hamburger-menu-bar"></span>
                <span className="hamburger-menu-bar"></span>
                <span className="hamburger-menu-bar"></span>
              </div>
            </li>
            <li className="main-header__navbar--item">
              <p className="main-header__logo">
                <a href="/">humil.</a>
              </p>
            </li>
            <li className="main-header__navbar--item">
              <img
                className="shopping-bag"
                src="../assets/icons/blk/shopping-bag.png"
                alt="shopping bag"
              />
            </li>
          </ul>
        </nav>
      </header>
      <section className={`hamburger-nav ${isMenuOpen ? "open" : ""}`}>
        <div className="hamburger-nav__bar">
          <span className="close-menu" onClick={closeMenu}>
            &#10005;
          </span>
          {/* <img
            src="../assets/icons/wht/close-menu-wht.png"
            alt="close menu"
            className="close-menu"
            onClick={closeMenu}
          /> */}
        </div>
        <nav className="hamburger-nav__menu">
          <ul className="hamburger-nav__items">
            <li className="hamburger-nav__item">
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="hamburger-nav__item">
              <a href="/shop" onClick={closeMenu}>
                Shop
              </a>
            </li>
            <li className="hamburger-nav__item">
              <a href="/contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
