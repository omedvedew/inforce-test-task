import React from 'react';
import ProductsList from '../ProductsList/ProductsList';

const Main = ({
    filterState,
    applyNameFilter,
    applyQuantityFilter,
    deleteItem,
}) => {
    return (
        <div className="main">
            <ProductsList
                filterState={filterState}
                applyNameFilter={applyNameFilter}
                applyQuantityFilter={applyQuantityFilter}
                deleteItem={deleteItem}
            />
        </div>
    )
};

export default Main;