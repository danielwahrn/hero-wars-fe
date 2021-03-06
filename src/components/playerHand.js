import React from 'react';
import Card from './card.js';


class PlayerHand extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className="player-hand hand">{this.props.children}</ul>
    );
  }
}

export default PlayerHand;
