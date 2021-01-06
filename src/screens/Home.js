import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomView from '../components/CustomView';
import CoinFlip from '../components/CoinFlip';
import Stats from '../components/Stats';
import CustomButton from '../components/CustomButton';
import {V_16, H_4} from '../styles/Spacing';
import {ALL_STATS} from '../utils/constants';

function Home() {
  const initialState = {
    totalFlips: 0,
    heads: 0,
    tails: 0,
  };
  const [stats, setStats] = useState(initialState);
  const [allStats, setAllStats] = useState(initialState);
  const [flippedStats, setFlippedStats] = useState(false);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let statsObject = await AsyncStorage.getItem(ALL_STATS);
      statsObject = JSON.parse(statsObject);
      if (statsObject) {
        setAllStats(statsObject);
      }
    };
    bootstrapAsync();
  }, []);

  const resetStats = () => {
    if (flippedStats) {
      setAllStats(initialState);
      AsyncStorage.removeItem(ALL_STATS);
    }
    setStats(initialState);
  };

  return (
    <CustomView type="middleYContainer">
      <CoinFlip
        stats={stats}
        allStats={allStats}
        sendStats={(statsObject) => setStats(statsObject)}
        sendAllStats={(allStatsObject) => {
          AsyncStorage.setItem(ALL_STATS, JSON.stringify(allStatsObject));
          setAllStats(allStatsObject);
        }}
      />
      <CustomView marginTop={V_16} type="horizontalSpace">
        <Stats
          flipped={flippedStats}
          sendFlipped={(val) => setFlippedStats(val)}
          currentStats={stats}
          allStats={allStats}
        />
        <CustomButton
          type={flippedStats ? 'primaryRoundBtn' : 'secondaryRoundBtn'}
          text="Reset"
          textType={flippedStats ? 'smallPinkText' : 'smallSecondaryText'}
          marginRight={H_4}
          onPress={resetStats}
        />
      </CustomView>
    </CustomView>
  );
}

export default Home;
