const initializeDateObject = () => new Date();

const getdayMonthYear = (date, locales, options) => {
  const dateOfMonth = date.getDate();
  const day = new Intl.DateTimeFormat(locales, {
    weekday: options.weekday,
  }).format(date);

  const month = new Intl.DateTimeFormat(locales, {
    month: options.month,
  }).format(date);
  const year = new Intl.DateTimeFormat(locales, {
    year: options.year,
  }).format(date);

  return { date: dateOfMonth, month, year, day };
};

const getDate = ({
  locales = "en-US",
  monthFormat = "long",
  weekDayFormat = "long",
  yearFormat = "numeric",
} = {}) => {
  try {
    const options = {
      month: monthFormat,
      weekday: weekDayFormat,
      year: yearFormat,
    };
    let dateObject = initializeDateObject();

    const { date, month, year, day } = getdayMonthYear(
      dateObject,
      locales,
      options
    );
    return { date, month, year, day };
  } catch (error) {
    throw new Error(`Error : ${error.message}`);
  }
};

export default getDate;
