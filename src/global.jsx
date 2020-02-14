import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 

  body {
    background: ${({ theme }) => theme.body}!important;
    transition: all 0.1s linear;
  }`