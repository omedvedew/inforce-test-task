import React from 'react';
import products from './products';
import ProductsListItem from './ProductsListItem';

const ProductsList = () => {
    return (
        <div className="main__products-list">
            <h1 className="main__products-list__title">Products list</h1>
            {
                products.map(({id, name, imageUrl, count, size, weight}) => (
                    <div className="main__products-list__products-list-item" key={id}>
                        <ProductsListItem
                            id={id}
                            name={name}
                            imageUrl={imageUrl}
                            count={count}
                            height={size.height}
                            width={size.width}
                            weight={weight}
                        />
                    </div>
                ))
            }
        </div>       
    )
};

export default ProductsList;