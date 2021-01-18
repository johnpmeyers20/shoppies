import React from 'react';

const Alert = (props) => {
  return (
    <div class="block alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      <h1>{props.numOfNominees}</h1>
    </div>
  )
}

export default Alert;