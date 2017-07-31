import React, { Component } from 'react';
import List from './List/List';
import store from '../../redux/store';
import setFilter from '../../redux/actions';

class FilterList extends Component {
  constructor() {
    super();
    this.state = store.getState();

    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateFilter(ev) {
    store.dispatch(setFilter(ev.target.value));
  }

  render() {
    const { filterBy } = this.state;
    const frameworks = ['React', 'Angular', 'Vue', 'Ember'];

    return (
      <div>
        <input type="text" onChange={(ev) => this.updateFilter(ev) } />
        <List items={frameworks} filterBy={filterBy} />
      </div>
    )
  }
}

export default FilterList;
