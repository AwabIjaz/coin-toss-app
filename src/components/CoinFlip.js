import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import CardFlip from 'react-native-card-flip';

import CustomText from './CustomText';
import CustomButton from './CustomButton';
import {Layout, Colors} from '../styles';
import {V_12} from '../styles/Spacing';

const Coin = ({face, coinFlip, color}) => (
  <CustomButton
    activeOpacity={1}
    style={[styles.coin, {backgroundColor: color}]}
    onPress={coinFlip}>
    <CustomText text={face} type="primaryText" />
  </CustomButton>
);

const CoinFlip = ({stats, allStats, sendStats, sendAllStats}) => {
  const cardRef = useRef(null);
  const [flipping, setFlipping] = useState(false);

  const coinFlip = () => {
    if (flipping) {
      return;
    }
    setFlipping(true);
    cardRef.current.flip();
    const flipInterval = setInterval(() => {
      cardRef.current.flip();
    }, 200);
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    let timeout = 1800;
    if (randomNumber > 2) {
      timeout = 2050;
    }
    setTimeout(() => {
      clearInterval(flipInterval);
      setFlipping(false);
    }, timeout);
  };

  const flipEnd = (val) => {
    const {heads, tails, totalFlips} = stats;
    if (!flipping) {
      if (val === 0) {
        sendStats({heads: heads + 1, tails, totalFlips: totalFlips + 1});
        sendAllStats({
          heads: allStats.heads + 1,
          tails: allStats.tails,
          totalFlips: allStats.totalFlips + 1,
        });
      } else {
        sendStats({heads, tails: tails + 1, totalFlips: totalFlips + 1});
        sendAllStats({
          heads: allStats.heads,
          tails: allStats.tails + 1,
          totalFlips: allStats.totalFlips + 1,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <CardFlip
        style={styles.coinContainer}
        ref={(card) => (cardRef.current = card)}
        flipDirection="x"
        duration={300}
        flipZoom={0.3}
        onFlipEnd={flipEnd}>
        <Coin face="HEADS" coinFlip={coinFlip} color={Colors.PRIMARY} />
        <Coin face="TAILS" coinFlip={coinFlip} color={Colors.SECONDARY} />
      </CardFlip>
      <CustomButton
        onPress={coinFlip}
        disabled={flipping}
        marginTop={V_12}
        type={flipping ? 'primaryBtn' : 'secondaryBtn'}
        text={flipping ? 'Flipping...' : 'Flip it!'}
        textType={flipping ? 'smallPrimaryText' : 'smallSecondaryText'}
      />
    </View>
  );
};

const coinBase = {
  width: Layout.scaleWidth(60),
  height: Layout.scaleWidth(60),
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  coinContainer: {
    ...coinBase,
  },
  coin: {
    ...coinBase,
    borderRadius: Layout.scaleWidth(30),
    ...Layout.boxShadow(Colors.GRAY, {height: 2, width: 2}, 8, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

CoinFlip.propTypes = {
  stats: PropTypes.object,
  sendStats: PropTypes.func,
  allStats: PropTypes.object,
  sendAllStats: PropTypes.func,
};

export default CoinFlip;
