import {MONTHS, DEFAULT_REDIX} from './const';


export const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month}/${year.slice(2)}`;
};

export const formateDateInMarkup = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

export const formatTime = (time) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return `${hours}:${minutes}`;
};

export const getInterval = (dateStart, dateEnd) => {
  const interval = dateEnd.getTime() - dateStart.getTime();

  const days = parseInt((interval / (1000 * 60 * 60 * 24)), DEFAULT_REDIX);
  const hours = parseInt(((interval / (1000 * 60 * 60)) % 24), DEFAULT_REDIX);
  const minutes = parseInt(((interval / (1000 * 60)) % 60), DEFAULT_REDIX);

  const daysText = days ? `${days}D` : ``;
  const hoursText = hours ? `${hours}H` : ``;
  const minutesText = minutes ? `${minutes}M` : ``;

  return `${daysText}${hoursText}${minutesText}`;
};

export const getShortDate = (date) => {
  return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
};

export const getGroupedEvents = (events) => {
  return events.reduce((acc, event) => {
    if (acc.length === 0) {
      acc.push([event]);
      return acc;
    }
    const prevEvent = acc[acc.length - 1][0];
    const prevDate = new Date(prevEvent.dateStartEvent);
    const currentDate = new Date(event.dateStartEvent);
    const duration = prevDate.getDate() - currentDate.getDate();
    if (duration === 0) {
      acc[acc.length - 1].push(event);
    } else {
      acc.push([event]);
    }
    return acc;
  }, []);
};

export const getSignDirection = (typeEvent) => {
  switch (typeEvent) {
    case `fligh`:
      return `Sightseeing at`;
    case `taxi`:
      return `Taxi to`;
    case `drive`:
      return `Drive to`;
    case `check-in`:
      return `Check into`;
    default:
      return ``;
  }
};
