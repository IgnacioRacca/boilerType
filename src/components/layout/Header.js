import React from 'react';

function Header() {
  return (
    <div>
      <header style={headerStyle}>
         <h1>Boiler Types</h1> 
      </header>
    </div>
  )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'left',
    padding: '10px'
}

export default Header;