import React from 'react';
import { Link } from 'react-router-dom';

const ProductsListItem = ({
    id,
    name,
    imageUrl,
    count,
    width,
    height,
    weight,
    index,
    deleteItem,
    getProductPageState,
}) => {
    return (
        <>
            <button className="mpp_delete-btn" onClick={() => deleteItem(index)}>delete this item</button>
            <h3 className="mpp_title">{name}</h3>
            <img className="mpp_photo" src={imageUrl} alt={'nth(' + id + ') image'}></img>
            <div className="mpp_description">This is a high quality product with: 
                <p>sizes: {width}mm * {height}mm;</p>  
                <p>weight: {weight}.</p> 
            </div>
            <div className="mpp_quantity-available">Available quantity: {count}</div>
            <Link to='/product_page' className="mpp_details-btn" onClick={() => getProductPageState(index)}>details</Link>
        </>
    )
};

export default ProductsListItem;