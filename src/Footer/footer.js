import React from 'react';

import { BannerWrapper } from '../Common/BannerWrapper.styles.jsx'
import { NextTile } from '../Common/Tile.styles.jsx';
import { Button } from '../Common/Button.styles.jsx'

function Footer({ shufflePlayers }) {
  return (
    <BannerWrapper>
      < CreateTournament shufflePlayers= { shufflePlayers }/>
    </BannerWrapper>
  )
}

function CreateTournament({ shufflePlayers }) {
  return (
    <NextTile>
      <Button onClick={ shufflePlayers }>Create</Button>
    </NextTile>
  )
}

export default Footer;
