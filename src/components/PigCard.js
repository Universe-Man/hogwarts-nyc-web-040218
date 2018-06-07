import React, { Component } from 'react'

class PigCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }

    // this.pigDetails = this.pigDetails.bind(this)
  }

  render() {
    const imgName = this.props.name.toLowerCase().split(' ').join('_')

    const lis = this.renderLis()

    return (
      <div>
        <img src={require(`../hog-imgs/${imgName}.jpg`)} onClick={this.handleClick} />
        <h5>{this.props.name}</h5>

          {lis}

      </div>
    )
  }

  handleClick = () => {
    if (!this.state.clicked) {
      this.setState({
        clicked: true
      })
    } else {
      this.setState({
        clicked: false
      })
    }
  }

  renderLis = () => {
    if (this.state.clicked) {
      const details = [this.props.specialty, this.props.greased.toString(), this.props.weight, this.props.medal]

      const liMap = details.map( deet => <li key={deet}>{deet}</li>)

      return (
        liMap
      )
    }
  }

}



export default PigCard
