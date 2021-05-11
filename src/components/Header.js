import React from 'react';
import Button from './Button';

const Header = (props) => {
  const nomNum = props.noms && props.heading === "Nominees" ? '(' + props.noms.length + ')' : null;
  return (
    <div className="header col">
      <h1>{props.heading} {nomNum}</h1>
      <Button />
    </div>
  )
}

export default Header;