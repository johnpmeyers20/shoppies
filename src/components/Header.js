import React from 'react';

const Header = (props) => {
  const nomNum = props.noms && props.heading === "Nominees" ? '(' + props.noms.length + ')' : null;
  return (
    <div className="col">
      <h1>{props.heading} {nomNum}</h1>
    </div>
  )
}

export default Header;