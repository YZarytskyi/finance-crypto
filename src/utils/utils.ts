export const setNumberFormat = (number: number): string => new Intl.NumberFormat("ua-UA").format(number);
export const removeFloatNull = (value: number): string => {
  const regExp = new RegExp(/\.?0*$/);
  return value < 1000 ? String(value).replace(regExp, "") : setNumberFormat(value);
};
export const numberToFixed2 = (number: number): number => {
  if (number < 0.00000001) {
    return (Math.trunc(number * 10000000000)) / 10000000000;
  } else if (number < 0.000001) {
    return (Math.trunc(number * 100000000)) / 100000000;
  } else if (number < 0.0001) {
    return (Math.trunc(number * 1000000)) / 1000000;
  } else if (number < 0.01) {
    return (Math.trunc(number * 10000)) / 10000;
  }
  return ((Math.trunc(number * 100)) / 100)
}

export const setClassNamePlusOrMinus = (value: number) => {
  return value > 0 ? 'percentagePlus' : 'percentageMinus';
}