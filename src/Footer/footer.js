import React from 'react';
import { Link } from 'react-router-dom'

import { BannerWrapper } from '../Common/BannerWrapper.styles.jsx'
import CreateTournament from '../CreateTournament/createTournament.jsx'

function Footer() {
  return (
    <BannerWrapper>
      < CreateTournament/>
      <Link to='/about'>About</Link>
    </BannerWrapper>
  )
}

export default Footer;
