export const setNumberFormat = (number: number) => new Intl.NumberFormat("ua-UA").format(number);
export const removeFloatNull = (value: number) => {
  const regExp = new RegExp(/\.?0*$/);
  return value < 1000 ? String(value).replace(regExp, "") : setNumberFormat(value);
};