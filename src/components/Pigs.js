import React from 'react';
import PigCard from './PigCard'
import Filters from './Filters'
import SortFilters from './SortFilters'


class Pigs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      sorted: false
      // myPigs: [{}{}{}]
    }
  }

  onInputChange = (e) => {
    this.setState({
      value: e.target.value,
      sorted: false
    })
  }

  postPigs = () => {
    let hogs;

    const filteredByName = [...this.props.hogs].filter( hogObj => hogObj.name.toLowerCase().includes(this.state.value.toLowerCase()) )

    const sortedByWeight = [...this.props.hogs].sort((hog1, hog2) => {
      return hog1.weight - hog2.weight
    })

    if (this.state.value !== '') {
      hogs = filteredByName
    } else if (this.state.sorted) {
      hogs = sortedByWeight
    } else {
      hogs = this.props.hogs
    }

    return hogs.map( hog => (
      < PigCard key={hog.name} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog.medal} />
    ) )
  }

  sortWeight = () => {
    this.setState({
      sorted: true
    })
    // console.log(this.props.hogs);
    // this.props.hogs.map( hogObj =>
    // console.log(hogObj.weight));

  }

  render() {
    const pigsCards = this.postPigs()

    return (
      <div>
        <Filters onInputChange={this.onInputChange} value={this.state.value}/>
        <SortFilters sortWeight={this.sortWeight}/>
        <div id="pigs-container">
          {pigsCards}
        </div>
      </div>
    )
  }
}

export default Pigs
