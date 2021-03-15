import React, { Component } from 'react';
import Main from './Main/Main';

import '../common/style/style.css'

class App extends Component {
  
  state = {
    filterState: {
      name: '',
      availableQuantity: 0, 
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

  deleteItem = (id) => {
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

  render () {
    return (
      <>
        <Main
          filterState={this.state.filterState}
          applyNameFilter={this.applyNameFilter}
          applyQuantityFilter={this.applyQuantityFilter}
          deleteItem={this.deleteItem}
        />
      </>
    )
  }
};

export default App;
