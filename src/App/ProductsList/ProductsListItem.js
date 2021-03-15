import React from 'react';

const ProductsListItem = ({
    id,
    name,
    imageUrl,
    count,
    width,
    height,
    weight,
}) => {
    
    return (
        <>
            <h3 className="mpp_title">{name}</h3>
            <img className="mpp_photo" src={imageUrl}></img>
            <div className="mpp_description">This is a high quality product with: 
                <p>sizes: {width}mm * {height}mm;</p>  
                <p>weight: {weight}.</p> 
            </div>
            <div className="mpp_quantity-available">Available quantity: {count}</div>
            <button className="mpp_details-btn">details</button>
        </>
    )
};

export default ProductsListItem;