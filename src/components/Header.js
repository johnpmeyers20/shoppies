import React from 'react';

const Header = (props) => {
  const nomineesLen = props.noms.length;
  const nomNum = props.heading === "Nominees" ? '(' + nomineesLen + ')' : null;
  return (
    <div className="col">
      <h1>{props.heading} {nomNum}</h1>
    </div>
  )
}

export default Header;