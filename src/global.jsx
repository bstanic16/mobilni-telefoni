import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 

  body {
    background: ${({ theme }) => theme.body}!important;
    transition: all 0.1s linear;
  }
  .text-title{
    color: ${({ theme }) => theme.textTitle}
  }

  .text-blue {
  color: ${({ theme }) => theme.textBlue}
}
  `