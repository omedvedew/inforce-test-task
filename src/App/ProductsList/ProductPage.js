import React from 'react';
import { Link } from 'react-router-dom';
import ProductPageComment from './ProductPageComment';

import products from './products';

const ProductPage = ({
    productPageState,
}) => {
    console.log(productPageState);
    return (
        <div className="main__products-list">
            <Link to="/">Back to products</Link>
            <h1 className="main__products-list__title">Product page</h1>
            <div className="main__products-list_items">
                <div className="main__products-list__products-list-item mppi_extended">
                    <div className="mpp_product">
                        <h3 className="mpp_title">{products[productPageState.index].name}</h3>
                        <img className="mpp_photo" src={products[productPageState.index].imageUrl} alt={'nth(' + products[productPageState.index].id + ') image'}></img>
                        <div className="mpp_description">
                            <p>Available quantity: {products[productPageState.index].count};</p>
                            <p>Color: whatever;</p> 
                            <p>sizes: {products[productPageState.index].size.width}mm * {products[productPageState.index].size.height}mm;</p>  
                            <p>weight: {products[productPageState.index].weight}.</p> 
                        </div>
                    </div>
                    <div className="mpp_comments">
                        <h3 className="mpp_comments_title">Comments</h3>
                        <ProductPageComment/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductPage;