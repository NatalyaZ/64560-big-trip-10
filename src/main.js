import {renderTripInfoTemplate} from './components/trip-info';
import {renderTripTotalPriceTemplate} from './components/trip-total-price';
import {renderMenuTemplate} from './components/menu';
import {rendertSortingTemplate} from './components/sorting';
import {renderFiltersTemplate} from './components/filters';
import {renderAddEditEventTemplate} from './components/add-edit-event';
import {renderEventListTemplate} from './components/event';
import {generateEvents} from './mock/event';
import {generateFilters} from './mock/filters';
import {generateMenuItems} from './mock/menu';


const SHOW_EVENTS_COUNT = 10;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const events = generateEvents(SHOW_EVENTS_COUNT);

const siteMainContainer = document.querySelector(`.page-body`);
const tripInfoContainer = siteMainContainer.querySelector(`.trip-info`);
render(tripInfoContainer, renderTripInfoTemplate(events));
render(tripInfoContainer, renderTripTotalPriceTemplate(events));

const tripControlsContainer = siteMainContainer.querySelector(`.trip-controls`);
const headerSectionsTripControlsContainer = tripControlsContainer.querySelectorAll(`.visually-hidden`);
render(headerSectionsTripControlsContainer[0], renderMenuTemplate(generateMenuItems()), `afterend`);
render(headerSectionsTripControlsContainer[1], renderFiltersTemplate(generateFilters()), `afterend`);

const tripEventsContaner = siteMainContainer.querySelector(`.trip-events`);
render(tripEventsContaner, rendertSortingTemplate());
render(tripEventsContaner, renderAddEditEventTemplate());

render(tripEventsContaner, renderEventListTemplate(events));
