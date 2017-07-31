import React from 'react';

const List = ({ items, filterBy }) => {
  return (
    <ul>
      {
        items
          .filter(item => item.indexOf(filterBy) > -1)
          .map((item, i) => <p key={i}>{item}</p>)
      }
    </ul>
  )
}

export default List;
