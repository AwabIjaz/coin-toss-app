import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../CustomText';

import styles from './btnStyles';
import {Layout, Colors} from '../../styles';
import {NA} from '../../styles/Spacing';

const CustomButton = ({
  type,
  text,
  textType,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  shadow,
  style,
  inactive,
  children,
  ...rest
}) => (
  <TouchableOpacity
    delayPressIn={0}
    style={[
      styles[type],
      Layout.margin(marginTop, marginRight, marginBottom, marginLeft),
      shadow && Layout.boxShadow(Colors.SHADOW),
      inactive && {opacity: 0.5},
      style,
    ]}
    disabled={inactive}
    {...rest}>
    {text && <CustomText text={text} type={textType} />}
    {children}
  </TouchableOpacity>
);

CustomButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  textType: PropTypes.string,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  shadow: PropTypes.bool,
  inactive: PropTypes.bool,
};
CustomButton.defaultProps = {
  marginTop: NA,
  marginRight: NA,
  marginBottom: NA,
  marginLeft: NA,
};

export default CustomButton;
