import React, { Component } from "react";
import PropTypes from "prop-types";
import BoilerTypeItem from "./BoilerTypeItem";



class BoilerType extends Component {
  render() {
    return (
      <div>
        {
            this.props.boilerType.map((boilerType) => (
                <BoilerTypeItem key={boilerType.id} boilerType={boilerType}/>
                )
            )
        }
      </div>
    )
  }
}

//PropTypes
BoilerType.propTypes = {
    boilerType: PropTypes.array.isRequired
}


export default BoilerType;

