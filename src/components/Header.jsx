import './Header.css';
import logo from '../logo.png';
import menuIcon from '../menu.png';
import { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const navRef = useRef(null);
  const btnRef = useRef(null);
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const COLLAPSE_WIDTH = 1160;

  useEffect(() => {
    function handleResize() {
      setCollapsed(window.innerWidth <= COLLAPSE_WIDTH);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="altrix logo" className="logo-img" />
        </Link>
      </div>
      {!collapsed ? (
        <nav className="nav-links" ref={navRef}>
          <Link to="/" className={isActive('/') ? 'active' : ''}>Platform</Link>
          <Link to="/security" className={isActive('/security') ? 'active' : ''}>Security</Link>
          <Link to="/company" className={isActive('/company') ? 'active' : ''}>Company</Link>
          <a href="#">Legal</a>
          <a href="#">Research</a>
        </nav>
      ) : (
        <>
          <button className="menu-btn" onClick={() => setMenuOpen(m => !m)} aria-label="Open menu">
            <img src={menuIcon} alt="menu" style={{width: 18, height: 12}} />
          </button>
          <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
            <Link to="/" className={isActive('/') ? 'active' : ''}>Platform</Link>
            <Link to="/security" className={isActive('/security') ? 'active' : ''}>Security</Link>
            <Link to="/company" className={isActive('/company') ? 'active' : ''}>Company</Link>
            <a href="#">Legal</a>
            <a href="#">Research</a>
            <button className="demo-btn outline dropdown-demo-btn">Request a demo</button>
          </div>
        </>
      )}
      {!collapsed && (
        <button className="demo-btn outline" ref={btnRef}>Request a demo</button>
      )}
    </header>
  );
}