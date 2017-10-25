import React from 'react';
import { Link } from 'react-router-dom'

import { BannerWrapper } from '../Common/BannerWrapper.styles.jsx'
import { Tile } from '../Common/Tile.styles.jsx';
import { Button } from '../Common/Button.styles.jsx'

function Footer({ shufflePlayers }) {
  return (
    <BannerWrapper>
      < CreateTournament shufflePlayers= { shufflePlayers }/>
      <Link to='/about'>About</Link>
    </BannerWrapper>
  )
}

function CreateTournament({ shufflePlayers }) {
  return (
    <Tile styleNextTile>
      <Button onClick={ shufflePlayers }>Create</Button>
    </Tile>
  )
}

export default Footer;
