const convertTimestamp = (input) => {
  let dateObj = new Date(input * 1000);
  let utcString = dateObj.toUTCString();
  return utcString;
};
export { convertTimestamp };
