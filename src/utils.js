/**
 * Returns a number with commas as thousands separators
 * @param {Number} number
 * @returns {String} parsed number
 */
export const numberWithCommas = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/**
 * Returns a string stating the time elapsed since a specified date
 * @param {String} date
 * @returns {String} time since (e.g. 2 minutes)
 */
export const getTimeSince = (date) => {
  let parsedDate = new Date(date).getTime() / 1000;

  const seconds = Math.floor(new Date().getTime() / 1000 - parsedDate);
  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return `${interval} ${interval === 1 ? 'year' : 'years'}`;
  }

  interval = Math.floor(seconds / 2592000);

  if (interval >= 1) {
    return `${interval} ${interval === 1 ? 'month' : 'months'}`;
  }

  interval = Math.floor(seconds / 86400);

  if (interval >= 1) {
    return `${interval} ${interval === 1 ? 'day' : 'days'}`;
  }

  interval = Math.floor(seconds / 3600);

  if (interval >= 1) {
    return `${interval} ${interval === 1 ? 'hour' : 'hours'}`;
  }

  interval = Math.floor(seconds / 60);

  if (interval >= 1) {
    return `${interval} ${interval === 1 ? 'minute' : 'minutes'}`;
  }

  return `${Math.floor(seconds)} ${
    Math.floor(seconds) === 1 ? 'second' : 'seconds'
  }`;
};

export const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}) => {
  const paddingToBottom = 20;

  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};
