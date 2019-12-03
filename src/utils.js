
export const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month}/${year.slice(2)}`;
}

export const formateDateInMarkup = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

export const formatTime = (time) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return `${hours}:${minutes}`;
}

export const getInterval = (dateStart, dateEnd) => {
  const interval = dateStart.getTime() - dateEnd.getTime();

  const days = parseInt(interval / (1000 * 60 * 60 * 24));
  const hours = parseInt((interval / (1000 * 60 * 60)) % 24);
  const minutes = parseInt((interval / (1000 * 60)) % 60);

  const daysText = days ? `${days}D` : ``;
  const hoursText = hours ? `${hours}H` : ``;
  const minutesText = minutes ? `${minutes}M` : ``;

  return `${daysText}${hoursText}${minutesText}`;
}
