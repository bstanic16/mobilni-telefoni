import React, { Component } from 'react';
import Product from '../Product';
import Title from '../Title';
import PrintAd from './PrintAd';
import Transport from './Transport';
import InfoAd from './InfoAd';
import { ProductConsumer } from '../../context';
import { storeProducts, detailProduct } from '../../data';
import styled from 'styled-components';
import Carousel from '../SliderList';
import ButtonUp from '../ButtonUp';
import Pagination from '../Pagination';

export default class ProductList extends Component {
    constructor() {
        super()
        let exampleItems = [...storeProducts];
        this.state = {
            products: storeProducts,
            exampleItems: exampleItems,
            pageOfItems: [],
            k: detailProduct
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        window.scrollTo(0, 0);
        this.setState({ pageOfItems: pageOfItems })
    }

    render() {

        console.log(this.state.products)
        return (
            <React.Fragment>
                <ProductWrapper className="py-5">
                    <div className="container">
                        <Title name="nasi" title="proizvodi" />
                        <Carousel />
                        <Title name="Novo - " title="akcija" />
                        <Pro className="row product-list">
                            <ProductConsumer>
                                {(value) => {
                                    return this.state.k.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </Pro>
                        <Pages>
                            <Pagination pageSize={24} labels={customLabels} styles={customStyles} items={this.state.exampleItems} onChangePage={this.onChangePage} />
                        </Pages>
                    </div>
                    <PrintAd />
                    <Transport />
                    <InfoAd />
                    <ButtonUp></ButtonUp>
                </ProductWrapper>
            </React.Fragment>
        )
    }
}

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
}

const customStyles = {
    ul: {
        borderRadius: '50px',
        border: '0',
    },
    li: {
        border: '0',
        justifyContent: 'space-beetween'
    },
    a: {
        color: 'var(--mainDark)',
        fontWeight: 'bold',
        // backgroundColor: 'var(--lightBlue)',
        paddingRight: '0.8rem',
        paddingLeft: '0.8rem',
        border: '0'

    },
}

const Pages = styled.div`
    width: 100%;
    text-align:center;
    padding: 1rem 0rem;
    @media(max-width: 320px) {
        padding: 0.3rem 0rem;
    }
`

const ProductWrapper = styled.section`
`

const Pro = styled.div`
        
`
// import React, { Component } from 'react';
// import Product from '../Product';
// import Title from '../Title';
// import { ProductConsumer } from '../../context';
// import { storeProducts, detailProduct } from '../../data';
// import styled from 'styled-components';
// import Carousel from '../SliderList';
// import ButtonUp from '../ButtonUp';
// import Pagination from 'jw-react-pagination';

// export default class ProductList extends Component {
//     constructor() {
//         super()
//         let exampleItems = [...storeProducts];
//         this.state = {
//             products: storeProducts,
//             exampleItems: exampleItems,
//             pageOfItems: [],
//             k: detailProduct
//         }
//         this.onChangePage = this.onChangePage.bind(this);
//     }

//     onChangePage(pageOfItems) {
//         this.setState({ pageOfItems: pageOfItems })
//     }

//     render() {

//         console.log(this.state.products)
//         return (
//             <React.Fragment>
//                 <ProductWrapper className="py-5">
//                     <div className="container">
//                         <Title name="nasi" title="proizvodi" />
//                         <Carousel />
//                         <Pro className="row product-list">
//                             <ProductConsumer>
//                                 {(value) => {
//                                     return this.state.k.map(product => {
//                                         return <Product key={product.id} product={product} />
//                                     })
//                                 }}
//                             </ProductConsumer>
//                         </Pro>
//                         <Pages>
//                             <Pagination pageSize={24} labels={customLabels} styles={customStyles} items={this.state.exampleItems} onChangePage={this.onChangePage} />
//                         </Pages>
//                     </div>
//                     <ButtonUp></ButtonUp>
//                 </ProductWrapper>
//             </React.Fragment>
//         )
//     }
// }

// const customLabels = {
//     first: 'Prva',
//     last: 'Poslednja',
//     previous: 'Prethodna',
//     next: 'Sledeca'
// }

// const customStyles = {
//     ul: {
//         borderRadius: '50px',
//         border: '0',
//     },
//     li: {
//         border: '0',
//         justifyContent: 'space-beetween'
//     },
//     a: {
//         color: 'var(--mainDark)',
//         fontWeight: 'bold',
//         // backgroundColor: 'var(--lightBlue)',
//         paddingRight: '1rem',
//         paddingLeft: '1rem',
//         border: '0'

//     },
// }

// const Pages = styled.div`
//     width: 100%;
//     text-align:center;
//     padding: 1rem 0rem;
// `

// const ProductWrapper = styled.section`
// `

// const Pro = styled.div`

// `