// import React, { Component } from 'react';
// import styled from 'styled-components'
// import { ButtonContainer } from '../../Button';

// export default class Search extends Component {
//     state = {
//         productClicked: false,
//         productName: ''
//     }
//     clickedProductHandler = () => {
//         console.log("handler: ", this.state.productName)
//         this.setState({
//             productClicked: !this.state.productClicked,
//             clicked: false
//         })
//     }

//     onProductNameChange = (event) => {
//         console.log("Name:", this.state.productName)
//         this.setState({ productName: event.target.value })
//     }
//     render() {
//         return (
//             this.props.pageOfItems.map(item => {
//                 return (
//                     <div className="row justify-content-center p-2">
//                         <Input type="text" placeholder="Naziv proizvoda" onChange={this.onProductNameChange} />
//                         <Button>
//                             <ButtonContainer onClick={this.clickedProductHandler}>SEARCH</ButtonContainer>
//                         </Button>
//                     </div>
//                 )
//             })
//         )
//     }
// }

// const Input = styled.input`
//     text-transform:capitalize;
//     font-size: 1.4rem;
//     background: transparent;
//     border: 0.05rem solid var(--lightBlue);
//     border-color: ${p => p.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
//     color: ${p => p.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
//     border-radius: 0.5rem;
//     padding: 0.2rem 0.5rem;
//     cursor:pointer;
//     margin: 0.2rem 0.5rem 0.2rem 0;
//     transition: all 0.5s ease-in-out;
//     &:hover {
//         background:${p => p.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
//         color: var(--mainBlue);
//     }
//     &:focus {
//         outline:none;
//     }
// `

// const Button = styled.div`
//     text-align:center;
// `