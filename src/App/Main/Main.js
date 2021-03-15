import React from 'react';
import ProductsList from '../ProductsList/ProductsList';

const Main = ({
    filterState,
    applyNameFilter,
    applyQuantityFilter,
}) => {
    return (
        <div className="main">
            <ProductsList
                filterState={filterState}
                applyNameFilter={applyNameFilter}
                applyQuantityFilter={applyQuantityFilter}
            />
        </div>
    )
};

export default Main;