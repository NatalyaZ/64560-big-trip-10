import { renderTripInfoTemplate } from './components/trip-info';
import { renderMenuTemplate } from './components/menu';
import { rendertSortingTemplate } from './components/sorting';
import { renderFiltersTemplate } from './components/filters';
import { renderAddEditEventTemplate } from './components/add-edit-event';
import { renderEventListTemplate, renderEventTemplate } from './components/event';


const EVENT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template());
};

const siteMainContainer = document.querySelector(`.page-body`);
const tripInfoContainer = siteMainContainer.querySelector(`.trip-info`);
render(tripInfoContainer, renderTripInfoTemplate, `afterbegin`);

const tripControlsContainer = siteMainContainer.querySelector(`.trip-controls`);
const headerSectionsTripControlsContainer = tripControlsContainer.querySelectorAll(`.visually-hidden`);
render(headerSectionsTripControlsContainer[0], renderMenuTemplate, `afterend`);
render(headerSectionsTripControlsContainer[1], renderFiltersTemplate, `afterend`);

const tripEventsContaner = siteMainContainer.querySelector(`.trip-events`);
render(tripEventsContaner, rendertSortingTemplate, `beforeend`);
render(tripEventsContaner, renderAddEditEventTemplate, `beforeend`);
render(tripEventsContaner, renderEventListTemplate, `beforeend`);

const eventListContainer = tripEventsContaner.querySelector(`.trip-days`);
for (let i = 0; i < EVENT_COUNT; i++) {
  render(eventListContainer, renderEventTemplate, `beforeend`);
}
