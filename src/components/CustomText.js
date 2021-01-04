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
const styles = StyleSheet.create({
  basic: {
    ...textBase,
  },
  primaryText: {
    ...textBase,
    color: Colors.WHITE,
  },
  secondaryText: {
    ...textBase,
    color: Colors.SECONDARY,
  },
  errorText: {
    ...errorTextBase,
    fontSize: Typography.FONT_SIZE_8,
  },
});

CustomText.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  bold: PropTypes.bool,
  textWidth: PropTypes.number,
};

export default CustomText;
