import React from 'react';
import { Route } from 'react-router-dom';
import AddItem from '../ProductsList/AddItem';
import ProductPage from '../ProductsList/ProductPage';
import ProductsList from '../ProductsList/ProductsList';

const Main = ({
    filterState,
    applyNameFilter,
    applyQuantityFilter,
    deleteItem,
    newProductState,
    addNewItem,
    newAddedProduct,
    applyNewProduct,
    denyNewProduct,
    getProductPageState,
    productPageState,
}) => {
    return (
        <div className="main">
            <Route path="/" exact render={() => 
                    <ProductsList
                    filterState={filterState}
                    applyNameFilter={applyNameFilter}
                    applyQuantityFilter={applyQuantityFilter}
                    deleteItem={deleteItem}
                    newAddedProduct={newAddedProduct}
                    getProductPageState={getProductPageState}
                    />
                }
            />
            <Route path="/add-new-item" render={() =>
                    <AddItem
                        newProductState={newProductState}
                        addNewItem={addNewItem}
                        applyNewProduct={applyNewProduct}
                        denyNewProduct={denyNewProduct}
                    />
                }
            />
            <Route path="/product_page" render={() =>
                    <ProductPage
                        productPageState={productPageState}
                    />
                }
            />
        </div>
    )
};

export default Main;