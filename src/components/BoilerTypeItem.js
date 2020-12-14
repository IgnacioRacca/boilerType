import React, { Component } from "react";
import PropTypes from 'prop-types';

class BoilerTypeItem extends Component {
  getStyle = () => {
      return {
          background: "#f4f4f4",
          paddign: "10px",
          borderBottom: "1px #ccc dotted",
      };
  };
  
  
    render() {
        const { id, skillsId, type, stock, description } = this.props.boilerType;
        
        return (
        <div style={this.getStyle()}>
            <p>
                Id: {id}  ||  Skills Id: {skillsId}  ||  Type: {type}  ||  Stock: {stock}  || Description: {description}
            </p>
        </div>
        )
    }
}

//proptypes

BoilerTypeItem.propTypes = {
    boilerType: PropTypes.object.isRequired
};

export default BoilerTypeItem;

