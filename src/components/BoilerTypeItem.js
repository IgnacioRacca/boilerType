import React, { Component } from "react";
import PropTypes from 'prop-types';



class BoilerTypeItem extends Component {
  getStyle = () => {
      return {
          background: "#f4f4f4",
          paddign: "10px 20px",
          borderBottom: "1px #ccc dotted",
      };
  };
  
  
    render() {
        const { id, skillsId, type, stock, description } = this.props.boilerType;
        
        return (
        <div style={this.getStyle()}>
            <p>
                Id: {id}  ||  Skills Id: {skillsId}  ||  Type: {type}  ||  Stock: {stock}  || Description: {description}
                <button onClick={() => this.props.deleteBoilerType(id)} 
                style={btnDelete}>x</button>
                <button onClick={this.props.editBoilerType.bind(this, this.props.boilerType)} style={btnEdit} >Edit</button>
                
                
            </p>
        </div>
        )
    }
}

//proptypes

BoilerTypeItem.propTypes = {
    boilerType: PropTypes.object.isRequired,
    deleteBoilerType: PropTypes.func.isRequired,
    editBoilerType: PropTypes.func.isRequired,
};


const btnDelete ={
    background: 'red',
    color: '#fff',
    border:'none',
    padding: '5px 10px',
    //borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  }
  
const btnEdit ={
    background: '#555',
    color: '#fff',
    border:'none',
    padding: '5px 10px',
    //borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  }

export default BoilerTypeItem;

