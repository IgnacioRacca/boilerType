import React, { Component } from "react";
import PropTypes from "prop-types";
import BoilerTypeItem from "./BoilerTypeItem";



class BoilerType extends Component {
  render() {
    return (
      <div>
        <h1>Boiler Types</h1>
        {
            this.props.boilerType.map((boilerType) => (
            <BoilerTypeItem key={boilerType.id} boilerType={BoilerTypeItem}/>
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

