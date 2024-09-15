const initializeDateObject = () => new Date();

const InternationalDateTimeFormat = (date, locales, options) => {
  try {
    return new Intl.DateTimeFormat(locales, options).format(date);
  } catch (error) {
    console.error(`Error formatting in Intl.DateTimeFormat: ${error.message}`);
    return null;
  }
};

const getdayMonthYear = (date, locales, options) => {
  const parts = ["day", "weekday", "month", "year"];
  const result = {};

  parts.forEach((part) => {
    if (options[part]) {
      result[part] = InternationalDateTimeFormat(date, locales, {
        [part]: options[part],
      });
    }
  });

  return result;
};

export const getDate = ({
  locales = "en-US",
  dateFormat = "numeric",
  monthFormat = "long",
  weekDayFormat = "long",
  yearFormat = "numeric",
} = {}) => {
  try {
    const options = {
      month: monthFormat,
      weekday: weekDayFormat,
      year: yearFormat,
      day: dateFormat,
    };
    const dateObject = initializeDateObject();
    const {
      day,
      weekday: dayOfWeek,
      month,
      year,
    } = getdayMonthYear(dateObject, locales, options);
    return {
      date: day || "N/A",
      month: month || "N/A",
      year: year || "N/A",
      day: dayOfWeek || "N/A",
    };
  } catch (error) {
    console.error(`Error in getDate function: ${error.message}`);
    return {
      date: "N/A",
      month: "N/A",
      year: "N/A",
      day: "N/A",
    };
  }
};

export const getTime = ({ locales = "en-US", timeStyle = "medium" } = {}) => {
  try {
    const options = { timeStyle };
    const dateObject = initializeDateObject();
    return InternationalDateTimeFormat(dateObject, locales, options) || "N/A";
  } catch (error) {
    console.error(`Error in getTime function: ${error.message}`);
    return "N/A";
  }
};

const date = getDate();
console.log(date);

const time = getTime();
console.log(time);
