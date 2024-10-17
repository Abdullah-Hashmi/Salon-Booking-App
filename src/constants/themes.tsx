import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const COLORS = {
  // Global colors for salon app

  // → Brand
  Purple_4: '#CBBFFF',
  Purple_3: '#9880FE',
  Purple_2_Base: '#6440FE',
  Purple_1: '#3F13FE',
  Purple_0: '2C01E2',

  // → Base
  Dark_0: '1C1C28',
  Dark_1: '28293D',
  Dark_2: '555770',
  Dark_3: '8F90A6',
  Dark_4: 'C7C9D9',

  Light_0: 'E4E4EB',
  Light_1: 'EBEBF0',
  Light_2: 'F2F2F5',
  Light_3: 'FAFAFC',
  Light_4: 'FFFFFF',

  // → System
  Orange_0: 'E57A00',
  Orange_1: 'FF8800',
  Orange_2: 'FDAC42',
  Orange_3: 'FCCC75',
  Orange_4: 'FFF8E5',

  Blue_0: '004FC4',
  Blue_1: '0063F7',
  Blue_2: '5B8DEF',
  Blue_3: '9DBFF9',
  Blue_4: 'E5F0FF',

  Yellow_0: 'E5B800',
  Yellow_1: 'FFCC00',
  Yellow_2: 'FDDD48',
  Yellow_3: 'FDED72',
  Yellow_4: 'FFFEE5',

  Green_0: '05A660',
  Green_1: '06C270',
  Green_2: '39D98A',
  Green_3: '57EBA1',
  Green_4: 'E3FFF1',

  Red_0: 'E53535',
  Red_1: 'FF3B3B',
  Red_2: 'FF5C5C',
  Red_3: 'FF8080',
  Red_4: 'FFE5E5',
  // *****************************************
  primary: '#743df9',
  secondary: '#2c2651',
  white: '#FFFFFF',
  secondaryWhite: '#F9F9FF',
  tertiaryWhite: '#fafafa',
  black: '#000000',
  gray: '#8a8994',
  gray2: '#e4e5e6',
  secondaryGray: '#808080',
};

export const SIZES = {
  // Global SIZES
  base: 8,
  font: 14,
  radius: 30,
  padding: 8,
  padding2: 12,
  padding3: 16,

  // FONTS Sizes
  largeTitle: 50,
  h1: 36,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // App Dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'black',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'bold', fontSize: SIZES.h4, lineHeight: 20},
  body1: {fontFamily: 'regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'regular', fontSize: SIZES.body4, lineHeight: 20},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
