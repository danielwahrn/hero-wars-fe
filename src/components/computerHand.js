import React from 'react';
import Card from './card.js';


class ComputerHand extends React.Component {
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //
  //   }
  // }

  render(){
    return (
      <div>
        <div className="hand">
          <Card cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
          <Card cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
          <Card cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
          <Card cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
          <Card cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
        </div>
          <Card cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
      </div>
    );
  }
}

export default ComputerHand;
