import React from 'react';

function Header(props) {

  return (
    <div>
      <h1 className="text-warning"> Student Grade Table</h1>
      <span>Average <span className="badge badge-secondary"> {props.newAverage}</span></span>
    </div>
  );

}
export default Header;
