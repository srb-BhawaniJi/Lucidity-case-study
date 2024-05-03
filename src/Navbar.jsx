import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { StyledNav } from './Style';

const Navbar = () => {
  const [isAdminView, setIsAdminView] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsAdminView(!isAdminView);
    navigate(isAdminView ? '/user' : '/');
  };

  return (
    <StyledNav>
      <button className='toggle-btn' onClick={handleToggle}>
        {isAdminView ? (
          <>
            <FontAwesomeIcon icon={faToggleOn} color="#dde665" />
            <span>Admin View</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faToggleOff} color="#dde665" />
            <span>User View</span>
          </>
        )}
      </button>
      <FontAwesomeIcon icon={faRightFromBracket} color= "#fafafa" />
    </StyledNav>
  );
};

export default Navbar;