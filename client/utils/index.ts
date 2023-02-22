export const pixelToRem = (pixel: number) => {
  const remSize = pixel / 10;
  return `${remSize}rem`;
};