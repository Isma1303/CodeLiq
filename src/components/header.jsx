import React, { useState } from "react";
import logo from "../assets/logo.png";
import { lightTheme, darkTheme } from "../Theme.jsx";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/">
            <img src={logo} alt="codeLiq logo" className="header-logo" />
          </Link>
          <button className="hamburger" onClick={toggleMenu} aria-label="Menú">
            {isMenuOpen ? "✕" : "☰"}
          </button>
          <nav className={`nav-menu${isMenuOpen ? " open" : ""}`}>
            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/price"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
