import React from 'react';
import { Link } from 'react-router-dom';

const AddItem = ({
    newProductState,
    addNewItem,
    applyNewProduct,
}) => {
    return (
        <div className="main__add-item-page">
            <form className="main__add-item-page__form" onSubmit={applyNewProduct}>
                <div className="maf_field">
                    Name:
                    <input type="text" value={newProductState.name} placeholder="enter product name here" onChange={addNewItem.newName}></input>
                </div>
                <div className="maf_field">
                    Image url:
                    <input type="text" value={newProductState.imageUrl} placeholder="enter product image url here" onChange={addNewItem.newImageUrl}></input>
                </div>
                <div className="maf_field">
                    Available quantity:
                    <input type="text" value={newProductState.count} placeholder="enter product available quantity here" onChange={addNewItem.newCount}></input>
                </div>
                <div className="maf_field">
                    Sizes:
                    <input type="text" value={newProductState.size.width} placeholder="enter product width here" onChange={addNewItem.newWidth}></input>
                    <input type="text" value={newProductState.size.height} placeholder="enter product height here" onChange={addNewItem.newHeight}></input>
                </div>
                <div className="maf_field">
                    Weight:
                    <input type="text" value={newProductState.weight} placeholder="enter product weight here" onChange={addNewItem.newWeight}></input>
                </div>
                <button type="submit"><Link to="/">Back</Link></button>
                
            </form>
        </div>
    )
};

export default AddItem;