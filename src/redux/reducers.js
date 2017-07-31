const initialState = {
  filterBy: ''
};

export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'SET_FILTER':
      return Object.assign({}, state, {
        filterBy: action.by
      });
    default:
      return state;
  }
}
