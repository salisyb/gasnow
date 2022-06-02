import {
  heightPercentageToDP,
  widthPercentageToDP,
  widthPercentageToHp,
} from 'react-native-responsive-screen';

export const hp = value => {
  const height = 0.13;
  return heightPercentageToDP(height * value);
};

export const wp = value => {
  const width = 0.28;
  return widthPercentageToDP(width * value);
};
