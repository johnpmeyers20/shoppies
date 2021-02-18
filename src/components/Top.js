import React from 'react';
import bag from '../media/shopify_glyph.png';

const Top = () => {
  return (
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
  )
}

export default Top;