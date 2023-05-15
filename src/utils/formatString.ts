//Removes white space and spaces from string and converts to upper case
const formatString = (string: string) => {
  const trimmedString = string.trim().replace(/\s/g, '').toUpperCase();
  return trimmedString;
};

export default formatString;
