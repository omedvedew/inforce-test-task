import React from 'react';
import products from './products';
import ProductsListItem from './ProductsListItem';

const ProductsList = ({
    filterState,
    applyNameFilter,
    applyQuantityFilter,
}) => {
    return (
        <div className="main__products-list">
            <h1 className="main__products-list__title">Products list</h1>
            <div className="main__filters">Filters:
                <form className="main__filters_name-filter">By name:
                    <input type="text" onChange={applyNameFilter} placeholder="enter a part of product name here"></input>
                </form>
                <form className="main__filters_quantity-filter">By quantity:
                    <input type="text" onChange={applyQuantityFilter} placeholder="enter requested quantity here"></input>
                </form>
            </div>
            <div className="main__products-list_items">
                {
                    console.log(filterState.availableQuantity)
                }
                {
                    products.filter(product => product.name.includes(`${filterState.name}`)).filter(product => product.count >= filterState.availableQuantity).map(({id, name, imageUrl, count, size, weight}) => (
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
        </div>       
    )
};

export default ProductsList;