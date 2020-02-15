import React from 'react';
import { func, string } from 'prop-types';
import { ReactComponent as Sun } from '../svgs/sunny.svg';
import { ReactComponent as Moon } from '../svgs/moon.svg';
import styled from 'styled-components'

const LightDark = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <Sun />
      <Moon />
    </ToggleContainer>

  )
}

LightDark.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default LightDark

const ToggleContainer = styled.button`
  background: var(--lightBlue);
  border: 2px solid var(--lightBlue);
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  overflow: hidden;
  padding: 0.5rem;
  justify-content: space-between;
  position: relative;
  width: 4rem;
  height: auto;
  outline:none;
  top: 0.5rem;
  right: 0.5rem;
  margin-left: auto!important;
  &:focus {
    outline: none;
  }
  
  svg {
    width: 4rem;
    height:auto;
    transition: all 0.2s linear;
    
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;