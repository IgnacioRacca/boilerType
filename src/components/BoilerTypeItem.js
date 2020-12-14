import React, { Component } from "react";

class BoilerTypeItem extends Component {
  getStyle = () => {
      return {
          background: "#f4f4f4",
          paddign: "10px2",
          borderBottom: "1px #ccc dotted",
      };
  };
  
  
    render() {
        const { id, skillsId, type, description, stock } = this.props.boilerType;
        
        return (
        <div style={this.getStyle()}>
            <p>
                Id: {id} - Type: {type} - Stock: {stock}    - Description: {description}
            </p>
        </div>
        )
    }
}

export default BoilerTypeItem

