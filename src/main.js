import { renderTripInfoTemplate } from './components/trip-info';
import { renderMenuTemplate } from './components/menu';
import { rendertSortingTemplate } from './components/sorting';
import { renderFiltersTemplate } from './components/filters';
import { renderAddEditEventTemplate } from './components/add-edit-event';
import { renderEventListTemplate, renderEventTemplate } from './components/event';
import {generateEvents} from './mock/event';


const EVENT_COUNT = 3;
const SHOW_EVENTS_COUNT = 10;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainContainer = document.querySelector(`.page-body`);
const tripInfoContainer = siteMainContainer.querySelector(`.trip-info`);
render(tripInfoContainer, renderTripInfoTemplate(), `afterbegin`);

const tripControlsContainer = siteMainContainer.querySelector(`.trip-controls`);
const headerSectionsTripControlsContainer = tripControlsContainer.querySelectorAll(`.visually-hidden`);
render(headerSectionsTripControlsContainer[0], renderMenuTemplate(), `afterend`);
render(headerSectionsTripControlsContainer[1], renderFiltersTemplate(), `afterend`);

const tripEventsContaner = siteMainContainer.querySelector(`.trip-events`);
render(tripEventsContaner, rendertSortingTemplate(), `beforeend`);
render(tripEventsContaner, renderAddEditEventTemplate(), `beforeend`);

const events = generateEvents(SHOW_EVENTS_COUNT);
console.log(events);
render(tripEventsContaner, renderEventListTemplate(events), `beforeend`);
