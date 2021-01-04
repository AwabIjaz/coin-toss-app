import React from 'react';

import CustomView from '../components/CustomView';
import CustomText from '../components/CustomText';

function Home({navigation}) {
  return (
    <CustomView type="middleAllContainer">
      <CustomText text="Home Screen." type="basic" />
    </CustomView>
  );
}

export default Home;
