import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {Layout, Colors} from '../styles';
import {NA} from '../styles/Spacing';

const CustomView = ({
  style,
  type,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  children,
  ...rest
}) => (
  <View
    style={[
      Layout.margin(marginTop, marginRight, marginBottom, marginLeft),
      styles[type],
      style,
    ]}
    {...rest}>
    {children}
  </View>
);

const base = {
  flex: 1,
  backgroundColor: Colors.WHITE,
};
const middleX = {
  alignItems: 'center',
};
const middleY = {
  justifyContent: 'center',
};
const horizontalBase = {
  flexDirection: 'row',
  backgroundColor: Colors.WHITE,
};
const styles = StyleSheet.create({
  basic: {
    ...base,
  },
  middleXContainer: {
    ...base,
    ...middleX,
  },
  middleYContainer: {
    ...base,
    ...middleY,
  },
  middleAllContainer: {
    ...base,
    ...middleX,
    ...middleY,
  },
  middleSelfContainer: {
    alignSelf: 'center',
  },
  horizontalSpace: {
    ...horizontalBase,
    ...middleX,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: Layout.scaleWidth(90),
  },
});

CustomView.propTypes = {
  type: PropTypes.string,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
};
CustomView.defaultProps = {
  marginTop: NA,
  marginRight: NA,
  marginBottom: NA,
  marginLeft: NA,
};

export default CustomView;
