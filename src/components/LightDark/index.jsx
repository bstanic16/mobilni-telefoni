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
  background: ${({ theme }) => theme.gradient};
  border: 2px solid var(--mainYellow);
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.2s linear;
    
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;