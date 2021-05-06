import React from 'react';

const Alert = (props) => {
  return (
    <div class="block alert alert-success alert-dismissible fade show" role="alert">
      <h3><strong>Success!</strong></h3>
      <h4>You've successfully nominated 5 films for the prestigious Shoppies Award!</h4>
      <p>If you'd like to change things up, you can still revoke a nomination and nominate a different film.</p>
    </div>
  )
}

export default Alert;