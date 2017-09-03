import React from 'react';
import './footer.css';

function Footer({ shufflePlayers }) {
  return (
    <div className='footer'>
      < CreateTournament shufflePlayers= { shufflePlayers }/>
    </div>
  )
}

function CreateTournament({ shufflePlayers }) {
  return <button className="tile btn-next" onClick={ shufflePlayers }>Create</button>
}

export default Footer;
