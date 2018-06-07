import React from 'react';

class Filters extends React.Component {
  render() {
    return (
      <div>
        Filter by Name: <input type="text" value={this.props.value} onChange={this.props.onInputChange} />
      </div>
    )
  }
}

export default Filters
