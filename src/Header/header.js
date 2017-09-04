import '../App.css';
import { Title } from '../Common/Text.styles.jsx'
import { BannerWrapper } from '../Common/BannerWrapper.styles.jsx'

import React from 'react';

function Header() {
  return (
    <BannerWrapper>
      <Title>ADD PLAYERS TO THE TOURNAMENT</Title>
    </BannerWrapper>
  )
}

export default Header;
