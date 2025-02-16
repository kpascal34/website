import React from 'react';
import { Link } from 'react-router-dom';
import { useSecureNavigation } from '../hooks/useSecurity'; // From your security hooks
import styled from 'styled-components';

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 12px 20px;
  background: rgba(0, 123, 255, 0.1);
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 123, 255, 0.2);
  }

  ${({ $secure }) => $secure && `
    &:after {
      content: '🔒';
      margin-left: 5px;
    }
  `}
`;

// Rename to avoid redeclaration
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.98);
  }
`;

const NavigationBar = () => {
  const { validateNavigation } = useSecureNavigation();
  
  return (
    <StyledNav>
      <NavLink to="/" onClick={(e) => validateNavigation(e, '/')}>HOME</NavLink>
      <NavLink to="/#about" onClick={(e) => validateNavigation(e, '/#about')}>ABOUT</NavLink>
      <NavLink to="/#services" onClick={(e) => validateNavigation(e, '/#services')}>SERVICES</NavLink>
      <NavLink to="/#contact" onClick={(e) => validateNavigation(e, '/#contact')}>CONTACT</NavLink>
    </StyledNav>
  );
};

export default NavigationBar;