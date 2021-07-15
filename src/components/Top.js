import React from 'react';
import bag from '../media/shopify_glyph.png';
import Alert from './Alert'

const Top = (props) => {
  const showAlert = props.nominees && props.nominees.length > 4 ? <Alert /> : null;
  return (
    <>
      <div className="top">
        <img
          className="logo-img"
          src={bag}
          alt="shopping bag"
          width="50px"
          height="auto"
        />
        <h1 className="logo-text"><strong><em>Shoppies</em></strong></h1>
      </div>
      {showAlert}
    </>
  )
}

export default Top;