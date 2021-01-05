import React from 'react';

import CustomView from '../components/CustomView';
import CoinFlip from '../components/CoinFlip';

function Home() {
  return (
    <CustomView type="middleAllContainer">
      <CoinFlip />
    </CustomView>
  );
}

export default Home;
