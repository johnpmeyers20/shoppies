import React from 'react';
import Button from './Button';
import SearchBox from './SearchBox';

const Header = (props) => {
  const includeSearch = props && props.heading === "Movies" ? <SearchBox searchValue={props.searchValue} setSearchValue={props.setSearchValue} /> : null;
  const nomNum = props.noms && props.heading === "Nominees" ? '(' + props.noms.length + ')' : null;
  return (
    <div className="row d-flex align-items-center mt-4 mb-4">
      <div className="header col">
        <h1>{props.heading} {nomNum}</h1>
        <Button
          // movieView={props.movieView}
          handleClick={props.handleClick}
        />
      </div>
      {includeSearch}
    </div>
  )
}

export default Header;