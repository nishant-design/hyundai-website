export const amountToDisplay = (val: number) => {
  return `₹ ${val.toLocaleString("en-IN")}`;
}