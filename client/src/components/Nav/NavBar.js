import React from 'react';
import { Link } from 'react-router-dom';
import { useSecureNavigation } from '../hooks/useSecurity'; // From your security hooks
import styled from 'styled-components';

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 8px 16px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #007bff;
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