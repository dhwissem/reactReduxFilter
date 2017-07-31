import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from './List/List';
import setFilter from '../../redux/actions';

class FilterList extends Component {

  render() {
    const { filterBy, frameworks, updateFilter } = this.props;

    return (
      <div>
        <input type="text" onChange={ updateFilter } />
        <List items={frameworks} filterBy={filterBy} />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    filterBy: state.filterBy,
    frameworks: state.frameworks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (ev) => dispatch(setFilter(ev.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
