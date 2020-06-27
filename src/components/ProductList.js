import React, { Component } from 'react';
import Product from './Product';
import Title from './Title'; 
import {ProductConsumer} from './../Context';

class ProductList extends Component {
    render() { 
        
        return ( 
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {(valueprop)=>{
                                    return valueprop.products.map( product => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ProductList;