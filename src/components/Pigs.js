import React from 'react';
import PigCard from './PigCard'
import Filters from './Filters'
import SortFilters from './SortFilters'


class Pigs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      myPigs: this.props.hogs,
      sorted: false,
      greasy: false
    }
  }

  onInputChange = (e) => {
    const filteredByName = [...this.props.hogs].filter( hogObj => hogObj.name.toLowerCase().includes(this.state.value.toLowerCase()) )

    this.setState({
      value: e.target.value,
      myPigs: filteredByName
    })
  }

  sortWeight = () => {
    const sortedByWeight = [...this.state.myPigs].sort((hog1, hog2) => {
      return hog1.weight - hog2.weight
    })

    if (!this.state.sorted) {
      this.setState({
        sorted: true,
        myPigs: sortedByWeight
      })
    }
    else {
      this.setState({
        sorted: false,
        myPigs: this.props.hogs
      })
    }
  }

  toggleGreased = () => {
    const gimmieGreased = [...this.state.myPigs].filter( hog => hog.greased )

    if (this.state.myPigs === this.props.hogs){
      this.setState({
        greasy: true,
        myPigs: gimmieGreased
      })
    } else {
      this.setState({
        greasy: false,
        myPigs: this.props.hogs
      })
    }
  }

  postPigs = () => {
    let hogs = this.state.myPigs

    return hogs.map( hog => (
      < PigCard key={hog.name} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog.medal} getPic={this.props.getPic}/>
    ) )
  }

  render() {
    const pigsCards = this.postPigs()

    return (
      <div>
        <Filters onInputChange={this.onInputChange} value={this.state.value}/>
        <SortFilters name="Sort by Weight" handler={this.sortWeight}/>
        <SortFilters name="Show Greased Only" handler={this.toggleGreased}/>
        <div id="pigs-container">
          {pigsCards}
        </div>
      </div>
    )
  }
}

export default Pigs
