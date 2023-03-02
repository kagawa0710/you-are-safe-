import dayjs from 'dayjs';

export const toMonthAndDayJP = (str) => {
  return dayjs(str).format('MM月DD日')
}
