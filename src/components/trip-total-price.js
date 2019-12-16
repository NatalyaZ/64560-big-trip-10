import {CURRENCY} from '../const';
import {getTripTotalPrice} from '../utils';

export const renderTripTotalPriceTemplate = (events) => {
  return (
    `<p class="trip-info__cost">
      Total: ${CURRENCY}&nbsp;<span class="trip-info__cost-value">${getTripTotalPrice(events)}</span>
    </p>`
  );
};
