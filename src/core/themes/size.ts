import {PixelRatio, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const widthToDP = (percent: string): number => {
  const elemWidth = parseFloat(percent);
  return parseFloat(PixelRatio.roundToNearestPixel((width * elemWidth) / 100).toFixed(2));
};

export const heightToDP = (percent: string): number => {
  const elemHeight = parseFloat(percent);
  return parseFloat(PixelRatio.roundToNearestPixel((height * elemHeight) / 100).toFixed(2));
};
