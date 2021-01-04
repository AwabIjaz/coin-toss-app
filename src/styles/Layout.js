import {Dimensions, PixelRatio} from 'react-native';

const SCREEN_WIDTH =
  Dimensions.get('window').width < Dimensions.get('window').height
    ? Dimensions.get('window').width
    : Dimensions.get('window').height;
const SCREEN_HEIGHT =
  Dimensions.get('window').width < Dimensions.get('window').height
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const BASE_WIDTH = 100;
const BASE_HEIGHT = 100;

export const scaleWidth = (width) => width * (SCREEN_WIDTH / BASE_WIDTH);

export const scaleHeight = (height) => height * (SCREEN_HEIGHT / BASE_HEIGHT);

export const scaleFont = (fontSize) =>
  Math.round(
    PixelRatio.roundToNearestPixel(fontSize * (SCREEN_WIDTH / BASE_WIDTH)),
  );

function dimensions(top, right = top, bottom = top, left = right, property) {
  let styles = {};
  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;
  return styles;
}

export function margin(top, right, bottom, left) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left) {
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
  color,
  offset = {height: 2, width: 2},
  radius = 4,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
