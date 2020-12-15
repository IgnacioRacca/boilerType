import React, { Component } from "react";
import PropTypes from "prop-types";
import BoilerTypeItem from "./BoilerTypeItem";





class BoilerType extends Component {
  render() {
    return (
      <div>
        {
          this.props.boilerType.map((boilerType) => (
              <BoilerTypeItem 
                key={boilerType.id} 
                boilerType={boilerType}
                deleteBoilerType={this.props.deleteBoilerType}
                editBoilerType={this.props.editBoilerType}
              />
              )
          )
        }
      </div>
    )
  }
}

//PropTypes
BoilerType.propTypes = {
    boilerType: PropTypes.array.isRequired,
    deleteBoilerType: PropTypes.func.isRequired,
    editBoilerType: PropTypes.func.isRequired,
}


export default BoilerType;

