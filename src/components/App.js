import React, { Component } from 'react';
import FilterList from './FilterList/FilterList';
import { Provider } from 'react-redux';
import store from '../redux/store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FilterList />
        </div>

      </Provider>
    );
  }
}

export default App;
