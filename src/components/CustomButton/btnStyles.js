import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../styles';

const base = {
  alignItems: 'center',
  justifyContent: 'center',
};
const main = {
  ...base,
  width: Layout.scaleWidth(60),
  height: Layout.scaleHeight(6),
  borderTopRightRadius: 8,
  borderBottomLeftRadius: 8,
};
const secondaryBase = {
  borderWidth: 1,
  borderColor: Colors.SECONDARY,
};
const roundBase = {
  width: Layout.scaleWidth(30),
  height: Layout.scaleWidth(30),
  borderRadius: Layout.scaleWidth(15),
};
const styles = StyleSheet.create({
  primaryBtn: {
    ...main,
    backgroundColor: Colors.PRIMARY,
  },
  primaryRoundBtn: {
    ...base,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    ...roundBase,
  },
  secondaryBtn: {
    ...main,
    ...secondaryBase,
  },
  secondaryRoundBtn: {
    ...base,
    ...secondaryBase,
    ...roundBase,
  },
});

export default styles;
