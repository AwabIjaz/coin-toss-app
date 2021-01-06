import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {Typography, Colors, Layout} from '../styles';

const CustomText = ({
  text,
  type,
  bold,
  center,
  textWidth,
  style,
  chidren,
  ...rest
}) => (
  <Text
    style={[
      styles[type],
      bold && Typography.FONT_BOLD,
      center && {textAlign: 'center'},
      textWidth && {width: Layout.scaleWidth(textWidth)},
      style,
    ]}
    {...rest}>
    {text}
    {chidren}
  </Text>
);

const textBase = {
  fontSize: Typography.FONT_SIZE_10,
  ...Typography.FONT_REGULAR,
  color: Colors.BLACK,
};
const errorTextBase = {
  ...textBase,
  color: Colors.ERROR,
};
const primaryBase = {
  ...textBase,
  color: Colors.WHITE,
};
const secondaryBase = {
  ...textBase,
  color: Colors.SECONDARY,
};
const small = {
  fontSize: Typography.FONT_SIZE_6,
};
const styles = StyleSheet.create({
  basic: {
    ...textBase,
  },
  primaryText: {
    ...primaryBase,
  },
  smallPrimaryText: {
    ...primaryBase,
    ...small,
  },
  secondaryText: {
    ...secondaryBase,
  },
  smallSecondaryText: {
    ...secondaryBase,
    ...small,
  },
  smallPinkText: {
    ...textBase,
    ...small,
    color: Colors.PRIMARY,
  },
  errorText: {
    ...errorTextBase,
    fontSize: Typography.FONT_SIZE_8,
  },
});

CustomText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  bold: PropTypes.bool,
  textWidth: PropTypes.number,
};

export default CustomText;
