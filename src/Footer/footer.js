import React from 'react';
import { CreateTournament } from '../GeneratePlayers/generatePlayers';

function Footer({ shufflePlayers }) {
  return (
    <div>
      < CreateTournament shufflePlayers= { shufflePlayers }/>
    </div>
  )
}

export default Footer;
