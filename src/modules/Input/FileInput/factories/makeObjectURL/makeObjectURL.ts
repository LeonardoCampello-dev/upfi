export const makeObjectURL = (value: Blob | MediaSource): string => {
  return URL.createObjectURL(value);
};
