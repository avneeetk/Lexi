
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            DyslexiaSight
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
          <NavLink to="/screening" currentPath={location.pathname}>Screening</NavLink>
          <NavLink to="/results" currentPath={location.pathname}>Results</NavLink>
        </nav>
        
        <div className="flex items-center">
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  currentPath: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;
  
  return (
    <Link 
      to={to} 
      className={`relative px-1 py-2 transition-colors duration-200 ${
        isActive 
          ? 'text-primary font-medium' 
          : 'text-foreground/70 hover:text-foreground'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
      )}
    </Link>
  );
};

export default Navigation;
