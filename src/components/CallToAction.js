import React from 'react';
import './CallToAction.css';

const CallToAction = (props) => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-sm">
        <h1>Anyone, Anywhere can nominate a film for the new Shoppies Award!</h1>
        <h3>The film industry has forever been changed by the introduction of the Shoppies Awards Ceremony. The Shoppies Awards are inclusive to all forms of film production, regardless of platform, on an international level. Help you're favorite films gain recognition by nominating them for our upcoming star-studded gala ceremony!</h3>
        <br />
        <p><em>Search for your favorite films via the searchbar in the upper right corner</em></p>
      </div>
      <div className="col-sm">
        <img className="img-fluid" src="https://i.imgur.com/AhwdN3Z.jpg" alt='trophies'/>
      </div>
    </div>
  )
}

export default CallToAction;