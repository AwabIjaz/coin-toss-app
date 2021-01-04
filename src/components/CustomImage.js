import React from 'react';
import PropTypes from 'prop-types';
import {Image, ImageBackground, StyleSheet} from 'react-native';

import {Layout} from '../styles';
import {BACKGROUND_IMAGE} from '../utils/constants';

const CustomImage = ({width, height, source, style, type, children, ...rest}) =>
  type !== BACKGROUND_IMAGE ? (
    <Image
      source={source}
      style={[
        {
          width: width && Layout.scaleWidth(width),
          height: height
            ? Layout.scaleHeight(height)
            : width && Layout.scaleWidth(width),
        },
        styles[type],
        style,
      ]}
      {...rest}
    />
  ) : (
    <ImageBackground source={source} style={styles.backgroundImage} {...rest}>
      {children}
    </ImageBackground>
  );

const styles = StyleSheet.create({
  basic: {
    resizeMode: 'contain',
  },
  cover: {
    resizeMode: 'cover',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
});

CustomImage.propTypes = {
  source: Image.propTypes.source.isRequired,
  type: PropTypes.string,
};
CustomImage.defaultProps = {
  type: 'basic',
};

export default CustomImage;
