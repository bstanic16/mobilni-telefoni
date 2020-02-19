import React, { Component } from 'react';
import Slider from './Slider';
import { detailProduct } from '../../data';
import AdProduct from '../AdProduct';

export default class List extends Component {
    state = {
        products: detailProduct
    }
    render() {
        return (
            <div>
                <Slider>
                    {this.state.products.map(item => <AdProduct product={item} />)}
                </Slider>
            </div>
        )
    }
}
