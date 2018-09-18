import React, { Component } from "react";

export default class Subm extends Component{

_handleClick = (e) =>{
    e.target.parentNode.parentNode.outerHTML = null;

}

    render(){
      return(
        <div className="submit-item">
              <div>
                <input type="checkbox" value="" />
                <span>{this.props.value}</span>
                <i className="fa fa-remove fa-2x" onClick={this._handleClick}></i>
              </div>
        </div>
      )
  }
}
