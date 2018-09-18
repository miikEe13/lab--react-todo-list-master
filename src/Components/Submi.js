  import React, { Component } from "react";
  import Subm from "./Subm";

  export default class Submi extends Component{
  render(){
   var removeItem = this.props.removeItem;
   var elements = this.props.values.map(function(value, index){
     return <Subm value={value} key={index}  index={index} removeItem={removeItem} />
   })
   return(
   <div className="submi">
    {elements}
   </div>
   )
  }
}
