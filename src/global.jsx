import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 

  body {
    background: ${({ theme }) => theme.body}!important;
    transition: all 0.1s linear;
  }
  .text-title{
    color: ${({ theme }) => theme.textTitle};
  }

  .text-blue {
  color: ${({ theme }) => theme.textBlue};
}

.img-container {
  background: ${({ theme }) => theme.imgContainer};
  border: 0px;
}

.columns-title{
  color: ${({ theme }) => theme.cartColumns};
}

.cart-item {
  color: ${({ theme }) => theme.cartItem};
}

.btn-black{
  background: ${({ theme }) => theme.btnBlack};
}

.text-totals{
  color: ${({ theme }) => theme.textTotals};
}
  `