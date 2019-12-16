import {
  getShortDate, formatTime, getInterval, getGroupedEvents, formateDateInMarkup,
  getSignDirection, getSortedEventsByDate
} from '../utils';
import {CURRENCY} from '../const';


const createOfferMarkup = (offer) => {
  const {title, price} = offer;
  return (
    `<li class="event__offer">
      <span class="event__offer-title">${title}</span>
      &plus;
      ${CURRENCY}&nbsp;<span class="event__offer-price">${price}</span>
    </li>`
  );
};

const createOffersMarkup = (offers) => {
  return (
    `<h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${offers.map(createOfferMarkup).join(`\n`)}
    </ul>`
  );
};

const createEventMarkup = (event) => {
  const {
    typeEvent, direction, totalPrice, offers, dateStartEvent, dateFinishEvent
  } = event;
  const timeStartEvent = formatTime(dateStartEvent);
  const timeEndEvent = formatTime(dateFinishEvent);
  const eventDuration = getInterval(dateStartEvent, dateFinishEvent);
  const offerList = createOffersMarkup(offers.slice(0, 3));
  const directionSign = getSignDirection(typeEvent);

  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${typeEvent}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${directionSign} ${direction}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">${timeStartEvent}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T11:00">${timeEndEvent}</time>
          </p>
          <p class="event__duration">${eventDuration}</p>
        </div>

        <p class="event__price">
          ${CURRENCY}&nbsp;<span class="event__price-value">${totalPrice}</span>
        </p>

        ${offerList}

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

const createDayMarkup = (event, count) => {
  const shorEventtDate = getShortDate(event[0].dateStartEvent);
  const shorEventtDateMarkup = formateDateInMarkup(event[0].dateStartEvent);

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${count}</span>
        <time class="day__date" datetime="${shorEventtDateMarkup}">${shorEventtDate}</time>
      </div>
  
      <ul class="trip-events__list">
        ${event.map(createEventMarkup).join(`\n`)}
      </ul>
    </li>`
  );
};

export const renderEventListTemplate = (events) => {
  const groupedEvents = getGroupedEvents(getSortedEventsByDate(events));
  return (
    `<ul class="trip-days">
      ${groupedEvents.map((day, index) => createDayMarkup(day, index + 1)).join(`\n`)}
    </ul>`
  );
};
