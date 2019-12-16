import {getTripInfo, getSortedEventsByDate} from '../utils';

export const renderTripInfoTemplate = (events) => {
  const details = getTripInfo(getSortedEventsByDate(events));
  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title">${details.title}</h1>
      <p class="trip-info__dates">${details.dates}</p>
    </div>`
  );
};
