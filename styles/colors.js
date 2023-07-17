// Neutral
export const neutral = {
  0: '#FFFFFF',
  5: '#F5F6F8',
  10: '#F5F5F5',
  20: '#F4F5F7',
  30: '#DBDBDB',
  40: '#DFE1E6',
  70: '#A5ADBA',
  80: '#97A0AF',
  90: '#8993A4',
  100: '#757575',
  200: '#6B778C',
  300: '#999999',
  500: '#42526E',
  600: '#344563',
  700: '#253858',
  800: '#172B4D',
  900: '#091E42',
};

// Blue
export const blue = {
  20: '#E6EFFC',
  50: '#DEEBFF',
  75: '#B3D4FF',
  100: '#4C9AFF',
  200: '#2684FF',
  300: '#0065FF',
  400: '#0052CC',
  500: '#0747A6',
};

// Red
export const red = {
  50: '#FFEBE6',
  75: '#FFBDAD',
  100: '#FF8F73',
  200: '#FF7452',
  300: '#FF5630',
  400: '#DE350B',
  500: '#FD3D3D',
};

// Yellow
export const yellow = {
  40: '#FFF4E3',
  50: '#FFFAE6',
  75: '#FFF0B3',
  100: '#FFE380',
  200: '#FFC400',
  300: '#FFAB00',
  400: '#FDAA29',
  500: '#FF8B00',
};

// Green
export const green = {
  40: '#EAF7F1',
  50: '#E3FCEF',
  75: '#ABF5D1',
  100: '#79F2C0',
  200: '#57D9A3',
  300: '#36B37E',
  400: '#3DB280',
  500: '#006644',
};

export const purple = {
  50: '#EAE6FF',
  75: '#C0B6F2',
  100: '#998DD9',
  200: '#8777D9',
  300: '#6554C0',
  400: '#5243AA',
  500: '#403294',
};

// 대표컬러
export const primary = {
  10: '#F1EFFB',
  50: '#D7C0F1',
  100: '#B488E5',
  200: '#036EB8',
  400: '#995EDC',
  500: '#7E34D3',
  G: 'linear-gradient(317deg, #7E34D3 18.97%, #5C30D8 100%)',
};

export const sub = {
  50: '#AB94EB',
  100: '#7E5BE0',
  200: '#036EB8',
  400: '#5C30D8',
  500: '#4822B3',
  700: '#011D2A',
};

export const semantic = {
  action: {
    primary: blue[400],
    secondary: neutral[40],
    confirm: green[400],
    warning: yellow[400],
    remove: red[400],
    help: purple[400],
  },
  message: {
    information: blue[400],
    success: green[400],
    warning: yellow[400],
    error: red[400],
  },
};

const colors = {
  blue,
  neutral,
  red,
  yellow,
  green,
  purple,
  semantic,
  primary,
};

export default colors;
