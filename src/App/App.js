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

  render () {
    return (
      <>
        <Main
          filterState={this.state.filterState}
          applyNameFilter={this.applyNameFilter}
          applyQuantityFilter={this.applyQuantityFilter}
        />
      </>
    )
  }
};

export default App;
