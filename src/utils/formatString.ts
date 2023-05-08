const formatString = (string: String) => {
  const trimmedString = string.trim().replace(/\s/g, '').toUpperCase();
  return trimmedString;
};

export default formatString;
