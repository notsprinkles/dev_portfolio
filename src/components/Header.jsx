import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <h1 className="logo">
          <NavLink to="/" className="logo-link">Dev Portfolio</NavLink>
        </h1>

        <nav className="nav">
          <ul className="nav-list">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><a href="https://github.com/notsprinkles" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
