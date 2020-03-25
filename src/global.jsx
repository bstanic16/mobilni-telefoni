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
  border: 2px solid var(--lightBlue);
  border-radius: 30px 30px 0 0;
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

.headline-text{
  color: ${({ theme }) => theme.headlineText};

}

  .description-text{
    color: ${({ theme }) => theme.descText};
  }
  
  .titleb {
    color: ${({ theme }) => theme.titleB};
  }

  .lightDark {
    background: ${({ theme }) => theme.lightDark};
  }

  .price-blue {
    color: var(--mainBlue);
  }

  .transport {
    color: ${({ theme }) => theme.transport};
  }
  `

