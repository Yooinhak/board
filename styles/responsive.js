const deviceSize = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1600,
};

const responsive = (size) => {
  return `@media (max-width: ${deviceSize[size] - 1}px)`;
};

export default responsive;
