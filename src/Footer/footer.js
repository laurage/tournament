import React from 'react';

import { BannerWrapper } from '../Common/BannerWrapper.styles.jsx'
import { Tile } from '../Common/Tile.styles.jsx';
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
    <Tile styleNextTile>
      <Button onClick={ shufflePlayers }>Create</Button>
    </Tile>
  )
}

export default Footer;
