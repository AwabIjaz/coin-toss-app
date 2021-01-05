import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import CardFlip from 'react-native-card-flip';

import CustomText from './CustomText';
import CustomButton from './CustomButton';
import {Layout, Colors} from '../styles';
import {V_16} from '../styles/Spacing';

const Coin = ({face, coinFlip, color}) => (
  <CustomButton
    activeOpacity={1}
    style={[styles.coin, {backgroundColor: color}]}
    onPress={coinFlip}>
    <CustomText text={face} type="primaryText" />
  </CustomButton>
);

const CoinFlip = () => {
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

  return (
    <>
      <CardFlip
        style={styles.coinContainer}
        ref={(card) => (cardRef.current = card)}
        flipDirection="x"
        flip
        duration={300}
        flipZoom={0.3}
        onFlip={(e) => console.log(e)}>
        <Coin face="HEADS" coinFlip={coinFlip} color={Colors.PRIMARY} />
        <Coin face="TAILS" coinFlip={coinFlip} color={Colors.SECONDARY} />
      </CardFlip>
      <CustomButton
        onPress={coinFlip}
        disabled={flipping}
        marginTop={V_16}
        type={flipping ? 'primaryBtn' : 'secondaryBtn'}
        text={flipping ? 'Flipping...' : 'Flip it!'}
        textType={flipping ? 'smallPrimaryText' : 'smallSecondaryText'}
      />
    </>
  );
};

const coinBase = {
  width: Layout.scaleWidth(60),
  height: Layout.scaleWidth(60),
};
const styles = StyleSheet.create({
  coinContainer: {
    ...coinBase,
  },
  coin: {
    ...coinBase,
    borderRadius: Layout.scaleWidth(60 / 2),
    ...Layout.boxShadow(Colors.GRAY, {height: 2, width: 2}, 8, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CoinFlip;
