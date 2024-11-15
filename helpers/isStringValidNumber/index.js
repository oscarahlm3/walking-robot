const isStringValidNumber = (nbr) => {
  const toNumber = +nbr;
  return !isNaN(toNumber);
};

module.exports = isStringValidNumber;
