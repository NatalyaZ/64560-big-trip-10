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

export const getSortedEventsByDate = (events) => {
  return events.sort((prev, next) => {
    return (new Date(prev.dateStartEvent).getDate() - new Date(next.dateStartEvent).getDate());
  });
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

export const getTripInfo = (events) => {
  const eventCount = events.length;

  let title = ``;
  let dates = ``;

  if (eventCount === 0) {
    return {
      title,
      dates
    };
  }

  title = `${events[0].direction} &mdash;${eventCount > 2 ? ` ... &mdash;` : ``} ${events[eventCount - 1].direction}`;
  dates = `${getEventsDates(
      new Date(events[0].dateStartEvent),
      new Date(events[eventCount - 1].dateFinishEvent)
  )}`;

  return {
    title,
    dates
  };
};

const getEventsDates = (dateStart, dateEnd) => {
  const beginer = `${MONTHS[dateStart.getMonth()]} ${dateStart.getDate()}`;
  const separate = `&nbsp;&mdash;&nbsp;`;
  const finish = dateStart.getMonth() === dateEnd.getMonth() ?
    dateEnd.getDate() : `${MONTHS[dateEnd.getMonth()]} ${dateEnd.getDate()}`;
  return `${beginer}${separate}${finish}`;
};

export const getEventTotalPrice = (offers) => {
  return `${offers.reduce((sum, o) => sum + Number(o.price), 0)}`;
};

export const getTripTotalPrice = (events) => {
  return events.reduce((total, event) => total + Number(getEventTotalPrice(event.offers)) + Number(event.price), 0);
};
