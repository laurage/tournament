import React from 'react';

import { BannerWrapper } from '../Common/BannerWrapper.styles.jsx'
import { CreateTournament } from '../CreateTournament/createTournament.jsx'

function Footer() {
  return (
    <BannerWrapper>
      < CreateTournament/>
    </BannerWrapper>
  )
}

export default Footer;
