import React, { Component } from 'react';
import Main from './Main/Main';

import '../common/style/style.css'

class App extends Component {
  
  state = {
    filterState: {
      name: '',
      availableQuantity: 0, 
    },
    newProductState: {
      name: '',
      imageUrl: '',
      count: '',
      size: {
        height: '',
        width: '',
      },
      weight: '',
    },
    newAddedProduct: {
      // name: ''
    },
  }

  applyNameFilter = (e) => {
    this.setState(prevState => ({
      filterState: {
        ...prevState.filterState,
        name: e.target.value,
      },
    }))
  }

  applyQuantityFilter = (e) => {
    this.setState(prevState => ({
      filterState: {
        ...prevState.filterState,
        availableQuantity: 0 || e.target.value,
      }
    }))
  }

  deleteItem = (id, condition) => {
    // eslint-disable-next-line no-restricted-globals
    let confirmation = confirm('Do you really want to delete this item?');
    if (confirmation === true) {
      this.setState(prevState => ({
        filterState: {
          ...prevState.filterState,
          toDelete: id - 1,
        },
      }));
    };
  }

  addNewItem ={
    newName: (e) => {
      this.setState(prevState => ({
        newProductState: {
          ...prevState.newProductState,
          name: e.target.value,
        }
      }))
    },
    newImageUrl: (e) => {
      this.setState(prevState => ({
        newProductState: {
          ...prevState.newProductState,
          imageUrl: e.target.value,
        }
      }))
    },
    newCount: (e) => {
      this.setState(prevState => ({
        newProductState: {
          ...prevState.newProductState,
          count: +e.target.value,
        }
      }))
    },
    newWidth: (e) => {
      this.setState(prevState => ({
        newProductState: {
          ...prevState.newProductState,
          size: {
            height: prevState.newProductState.size.heigth,
            width: +e.target.value,
          },
        }
      }))
    },
    newHeight: (e) => {
      this.setState(prevState => ({
        newProductState: {
          ...prevState.newProductState,
          size: {
            height: +e.target.value,
            width: prevState.newProductState.size.width,
          },
        }
      }))
    },
    newWeight: (e) => {
      this.setState(prevState => ({
        newProductState: {
          ...prevState.newProductState,
          weight: e.target.value,
        }
      }))
    },
  }

  applyNewProduct = (e) => {
    this.setState(prevState => ({
      newAddedProduct: {
        name: this.state.newProductState.name,
        imageUrl: this.state.newProductState.imageUrl,
        count: this.state.newProductState.count,
        size: {
          height: this.state.newProductState.size.height,
          width: this.state.newProductState.size.width,
        },
        weight: this.state.newProductState.weight,
      }
    }));
    this.setState(prevState => ({
      newProductState: {
        ...prevState.newProductState,
        name: '',
        imageUrl: '',
        count: 0,
        size: {
          width: 0,
          height: 0,
        },
        weight: 0,
      }
    }));
    e.preventDefault();
  }

  render () {
    console.log(this.state.newProductState)
    return (
      <>
        <Main
          filterState={this.state.filterState}
          applyNameFilter={this.applyNameFilter}
          applyQuantityFilter={this.applyQuantityFilter}
          deleteItem={this.deleteItem}
          newProductState={this.state.newProductState}
          addNewItem={this.addNewItem}
          newAddedProduct={this.state.newAddedProduct}
          applyNewProduct={this.applyNewProduct}
        />
      </>
    )
  }
};

export default App;
