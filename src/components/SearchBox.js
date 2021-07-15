import React from 'react';

const SearchBox = (props) => {
  //The function below ensures that the search value is updated only when Enter is hit
  //not every time a letter is entered.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.setSearchValue(e.target.value);
    }
  }

  const buttonSubmit = (e) => {
    var searchInput = document.getElementById("searchInput").value;
    props.setSearchValue(searchInput);
  }

  return (
    <div className="col col-sm-4" id="searchBarWithButton">
      <input
        type="text"
        id="searchInput"
        className="form-control"
        value={props.value}
        onKeyDown={handleKeyDown}
        placeholder="Type to search..."
      >
      </input>
      <button className="green" type="button" value='search-result' onClick={buttonSubmit}>Submit</button>
    </div>
  )
}

export default SearchBox;