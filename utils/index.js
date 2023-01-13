import { addDays, addWeeks, format, isValid } from 'date-fns';
import { DATE_FORMAT } from '../constants';

/*
Fertile window:
The fertile window is the time when you are most likely to conceive.
It starts 5 days before ovulation and ends 1 day after ovulation.
To calculate your fertile window, add 5 days to your ovulation date.
For example, if your ovulation date is day 14, your fertile window would be from day 9 to day 15.
*/
const calculateFertileWindow = () => {
  // TODO: Logic
};

/*
Ovulation date:
To calculate the ovulation date, you will need to know your cycle length.
The average cycle length is 28 days, but it can vary from person to person.
To calculate your ovulation date, subtract 14 days from the length of your cycle.
For example, if your cycle is 28 days, your ovulation date would be day 14.
*/
const calculateOvulationDate = () => {
  // TODO: Logic
};

/*
Next period date:
To calculate your next period date, simply add your cycle length to the start date of your last period.
For example, if your last period started on day 1 and your cycle length is 28 days, your next period would start on day 29.
*/
const calculateNextPeriod = () => {
  // TODO: Logic
};

/*
Pregnancy Test Date:
A pregnancy test can usually detect pregnancy after a missed period.
To calculate when to take a pregnancy test, add 14 days to the end of your fertile window.
For example, if your fertile window ends on day 15, you would take a pregnancy test on day 29.
*/
const calculatePregnancyTestDay = () => {
  // TODO: Logic
};

/*
Expected due date:
To calculate your expected due date, add 280 days (40 weeks) to the first day of your last period.
For example, if your last period started on day 1, your expected due date would be 280 days later on day 281.
*/
const calculateExpectedDueDate = () => {
  // TODO: Logic
};

const toNumber = (value) => {
  return isNaN(parseInt(value, 10)) ? '' : parseInt(value, 10);
};

function isNotEmpty(value) {
  return value !== undefined && value !== null && value !== '';
}

function toFormatted(date, formatString = DATE_FORMAT) {
  if (!isValid(date)) {
    return null;
  }

  return format(date, formatString);
}

function calculateOutcomes() {
  // TODO: Logic
}

export { toNumber, isNotEmpty, toFormatted, calculateOutcomes };
