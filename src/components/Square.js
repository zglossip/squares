import React, {Component} from 'react';
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    colors: state.colors
  };
};

class ConnectedSquare extends  Component {

  constructor(props){
    super(props);
    this.state = {
      currentColor: 0
    }
  }

  test(testVar){
    return testVar + 1;
  }

  changeSquare(){
    let currentColor = this.state.currentColor;

    if(currentColor !== 3){
      currentColor++;
    } else {
      currentColor = 0;
    }
    this.setState({currentColor: currentColor});
  }

  render(){
    return (
      <div className="square"
           style={{backgroundColor: this.props.colors[this.state.currentColor]}}
           onClick={() => this.changeSquare()}>
        {this.props.colors[this.state.currentColor]}
      </div>
    );
  }
}

const Square = connect(mapStateToProps) (ConnectedSquare);

export default Square;