const initializeDateObject = () => new Date();

const getdayMonthYear = (
  date,
  locales = "en-US",
  options = { month: "long" }
) => {
  const dateOfMonth = date.getDate();
  const month = new Intl.DateTimeFormat(locales, options).format(date);
  const year = date.getFullYear();

  return { date: dateOfMonth, month, year };
};

const getDate = (locales = "en-US", options = {}) => {
  try {
    let dateObject = initializeDateObject();

    const { date, month, year } = getdayMonthYear(dateObject, locales, options);
    return { date, month, year };
  } catch (error) {
    throw new Error(`Error : ${error.message}`);
  }
};

console.log(
  getDate("en-IN", {
    month: "long",
  })
);

module.exports = { getDate };
