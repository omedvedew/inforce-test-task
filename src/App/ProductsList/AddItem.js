import React from 'react';
import { Link } from 'react-router-dom';

const AddItem = ({
    newProductState,
    addNewItem,
    applyNewProduct,
    denyNewProduct,
}) => {
    return (
        <div className="main__add-item-page">
            <h2 className="main__add-item-page__title">Add new item page</h2>
            <form className="main__add-item-page__form" onSubmit={applyNewProduct} onReset={denyNewProduct}>
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
                    <input type="text" value={newProductState.count} placeholder="enter available quantity here" onChange={addNewItem.newCount}></input>
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
                <button className="maf_btn maf_btn-submit" type="submit">add product</button>
                <button className="maf_btn maf_btn-cancel" type="reset">cancel</button>

                <Link to="/">Back to products</Link>
                
            </form>
        </div>
    )
};

export default AddItem;