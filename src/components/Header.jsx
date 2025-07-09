import './Header.css';
import logo from '../logo.png';
import menuIcon from '../menu.png';
import { useRef, useState, useEffect } from 'react';

export default function Header() {
  const navRef = useRef(null);
  const btnRef = useRef(null);
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const COLLAPSE_WIDTH = 1160;

  useEffect(() => {
    function handleResize() {
      setCollapsed(window.innerWidth <= COLLAPSE_WIDTH);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="altrix logo" className="logo-img" />
      </div>
      {!collapsed ? (
        <nav className="nav-links" ref={navRef}>
          <a href="#" className="active">Platform</a>
          <a href="#">Security</a>
          <a href="#">Company</a>
          <a href="#">Legal</a>
          <a href="#">Research</a>
        </nav>
      ) : (
        <>
          <button className="menu-btn" onClick={() => setMenuOpen(m => !m)} aria-label="Open menu">
            <img src={menuIcon} alt="menu" style={{width: 18, height: 12}} />
          </button>
          {menuOpen && (
            <div className="dropdown-menu">
              <a href="#" className="active">Platform</a>
              <a href="#">Security</a>
              <a href="#">Company</a>
              <a href="#">Legal</a>
              <a href="#">Research</a>
              <button className="demo-btn outline dropdown-demo-btn">Request a demo</button>
            </div>
          )}
        </>
      )}
      {!collapsed && (
        <button className="demo-btn outline" ref={btnRef}>Request a demo</button>
      )}
    </header>
  );
}