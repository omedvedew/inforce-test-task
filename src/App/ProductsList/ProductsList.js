import React from 'react';
import { Link } from 'react-router-dom';

import products from './products';
import ProductsListItem from './ProductsListItem';

const ProductsList = ({
    filterState,
    applyNameFilter,
    applyQuantityFilter,
    deleteItem,
    newProductState,
    newAddedProduct,
}) => {
    console.log(filterState);

    let newProduct = newAddedProduct;
    
    if (Object.keys(newProduct).length > 1 && products.includes(newProduct) === false) {
        let newId = Object.keys(products).length + 1;
        newProduct.id = newId;
        products.push(newProduct);
    }

    if (filterState.toDelete !== undefined) {
        products.splice(filterState.toDelete, 1);
        console.log(`deleted ${products[filterState.toDelete + 1]}`)
    }

    console.log(filterState.toDelete);
    console.log(newProduct);
    console.log(products);

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
            <Link to="/add-new-item" className="main__add-new-item-btn">Add new item</Link>
            <div className="main__products-list_items">
                
                {
                    products.filter(product => product.name.includes(`${filterState.name}`)).filter(product => product.count >= filterState.availableQuantity).map(({id, name, imageUrl, count, size, weight}, i) => (
                        <div className="main__products-list__products-list-item" key={id}>
                            <ProductsListItem
                                id={id}
                                name={name}
                                imageUrl={imageUrl}
                                count={count}
                                height={size.height}
                                width={size.width}
                                weight={weight}
                                index={i}
                                deleteItem={deleteItem}
                            />
                        </div>
                    ))
                }
                
            </div>
        </div>       
    )
};

export default ProductsList;