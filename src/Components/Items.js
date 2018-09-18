import React, { Component } from 'react';

export default class Items extends Component {

  _handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         this.props.addItem();
         this.refs.text.value = '';
      }
  }
  
_handleChange = () => {
  this.props.saveText(this.refs.text.value)
}

render(){
  return (
    <div className="buttons">
      <input type="text" id="addTask" ref="text" onChange={this._handleChange} onKeyPress={this._handleKeyPress} />
      <button type="button" name="add"><i className="fa fa-plus"></i></button>
    </div>
    )
  }
}
