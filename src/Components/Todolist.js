import React, { Component } from 'react';
import Items from './Items';
import Submi from './Submi';

export default class TodoList extends Component {

  constructor(props) {
      super(props)
      this.state = {
        value: "",
        list: []
      }
  }

  saveText = (value) => {
    this.setState({value:value})
  }

  addItem = () => {
    let values = this.state.list;
    let value = this.state.value;
    if (value !== "") {
      values.push(value)
      this.setState({
        value: '',
        list: values
      });
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Todo List <small>Normal mode</small></h1>
        <Items addItem={this.addItem} saveText={this.saveText}/>
        <hr />
         <Submi values={this.state.list}/>
       </div>
      )
    }
}
