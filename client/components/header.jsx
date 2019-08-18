import React from 'react';

function Header(props) {

  return (
    <div>
      <h1 className="text-warning"> Student Grade Table</h1>
      <h5>Average <span className="badge badge-secondary"> {props.newAverage}</span></h5>
    </div>
  );

}
export default Header;
