export const amountToDisplay = (val: number | string) => {
  return `₹ ${val.toLocaleString("en-IN")}`;
}