import React from 'react';

const SortFilters = (props) => {
  return(
    <button onClick={props.handler}>
      {props.name}
    </button>
  )
}

export default SortFilters;
