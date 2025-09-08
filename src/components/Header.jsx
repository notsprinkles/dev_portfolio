import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Dev Portfolio</div>

      <nav className="nav">
        <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
        <NavLink to="/resume" className={({isActive}) => isActive ? 'active' : ''}>Resume</NavLink>
      </nav>

      <ThemeToggle />
    </header>
  );
}
export default Header;
