import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import CardFlip from 'react-native-card-flip';

import {Layout, Colors, Typography} from '../styles';
import CustomText from './CustomText';
import CustomView from './CustomView';
import {V_1, V_2, H_12, H_2, V_3} from '../styles/Spacing';
import CustomButton from './CustomButton';

const Stat = ({title, info, style}) => (
  <CustomView type="horizontalSpace" style={[{width: '80%'}, style]}>
    <CustomText
      text={title + ':'}
      type="smallPrimaryText"
      style={styles.text}
    />
    <CustomText text={info} type="smallPrimaryText" style={styles.text} />
  </CustomView>
);

const StatsContainer = ({stats, onPress, color}) => (
  <CustomButton
    onPress={onPress}
    style={[styles.container, {backgroundColor: color}]}>
    <Stat title="Total Flips" info={stats.totalFlips} />
    <Stat
      title="Heads"
      info={stats.heads}
      style={{marginTop: V_1, marginBottom: V_1}}
    />
    <Stat title="Tails" info={stats.tails} />
  </CustomButton>
);

const Stats = ({currentStats, allStats, flipped, sendFlipped}) => {
  const cardRef = useRef(null);
  const cardFlip = () => {
    sendFlipped(!flipped);
    cardRef.current.flip();
  };
  return (
    <View>
      <CustomText
        text={(flipped ? 'All Time' : 'Current') + ' Stats:'}
        type={flipped ? 'smallPinkText' : 'smallSecondaryText'}
        style={styles.text2}
      />
      <CardFlip
        style={styles.cardContainer}
        ref={(card) => (cardRef.current = card)}
        flipDirection="x">
        <StatsContainer
          stats={currentStats}
          onPress={cardFlip}
          color={Colors.SECONDARY}
        />
        <StatsContainer
          stats={allStats}
          onPress={cardFlip}
          color={Colors.PRIMARY}
        />
      </CardFlip>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: Layout.scaleWidth(55),
    height: Layout.scaleHeight(13),
  },
  container: {
    width: Layout.scaleWidth(55),
    paddingVertical: V_2,
    paddingRight: H_12,
    alignItems: 'center',
    borderTopRightRadius: Layout.scaleWidth(25),
    borderBottomRightRadius: Layout.scaleWidth(25),
  },
  text: {
    fontSize: Typography.FONT_SIZE_4,
  },
  text2: {
    fontSize: Typography.FONT_SIZE_4,
    marginTop: -V_3,
    marginBottom: V_1,
    marginLeft: H_2,
  },
});

Stats.propTypes = {
  currentStats: PropTypes.object,
  allStats: PropTypes.object,
  flipped: PropTypes.bool,
  sendFlipped: PropTypes.func,
};

export default Stats;
