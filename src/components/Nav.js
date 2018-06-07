import piggy from '../hog-imgs/porco.png';
import React from 'react';

const Nav = (props) => {
  let img = piggy
  if (props.pic !== '') {
    img = props.pic
  }
  console.log(props.pic);
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={img} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  )
}

export default Nav
