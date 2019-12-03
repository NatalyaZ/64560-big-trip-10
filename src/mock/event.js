import {TYPE_EVENT, CURRENCY} from '../const';


const SITIES = [`Amsterdam`, `Geneva`, `Chamonix`, `Saint Petersburg`];
const TAXI = [`airport`, `point`, `club`, `park`];
const HOTELS_TYPE = [`hotel`, `motel`, `hostel`];

const DESTINATION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet \
  varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. \
  Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, \
  sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur \
  ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut \
  dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc \
  fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const OFFERS = [
  {
    typeEvent: `flight`,
    title: `Add luggage`,
    price: `30`
  },
  {
    typeEvent: `flight`,
    title: `Switch to comfort class`,
    price: `100`
  },
  {
    typeEvent: `flight`,
    title: `Add meal`,
    price: `15`
  },
  {
    typeEvent: `flight`,
    title: `Choose seats`,
    price: `5`
  },
  {
    typeEvent: `bus`,
    title: `Tickets`,
    price: `12`
  },
  {
    typeEvent: `check-in`,
    title: `Room`,
    price: `150`
  },
  {
    typeEvent: `check-in`,
    title: `Add breakfast`,
    price: `30`
  },
  {
    typeEvent: `check-in`,
    title: `Bar`,
    price: `34`
  },
  {
    typeEvent: `check-in`,
    title: `Ironing`,
    price: `2`
  },
  {
    typeEvent: `drive`,
    title: `Gas`,
    price: `34`
  },
  {
    typeEvent: `drive`,
    title: `Rent a car`,
    price: `567`
  },
  {
    typeEvent: `restaurant`,
    title: `Meal`,
    price: `45`
  },
  {
    typeEvent: `restaurant`,
    title: `Vine`,
    price: `12`
  },
  {
    typeEvent: `ship`,
    title: `Tickets`,
    price: `34`
  },
  {
    typeEvent: `sightseeing`,
    title: `Tickets`,
    price: `23`
  },
  {
    typeEvent: `taxi`,
    title: `Order Uber`,
    price: `20`
  },
  {
    typeEvent: `train`,
    title: `Tickets`,
    price: `32`
  },
  {
    typeEvent: `transport`,
    title: `Rent a bike`,
    price: `12`
  },
  {
    typeEvent: `transport`,
    title: `Tickets`,
    price: `65`
  },
  {
    typeEvent: `trip`,
    title: `Other`,
    price: `23`
  },
  {
    typeEvent: `trip`,
    title: `Gifs`,
    price: `23`
  }
];

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomDates = () => {
  const dateStart = new Date();
  const diffValue = getRandomIntegerNumber(0, 500000);
  const dateEnd = new Date(dateStart.getTime() + diffValue);

  return [dateStart, dateEnd];
};

const getRandomPhotos = () => {
  const countPhotos = Math.random() * 10;

  return new Array(countPhotos)
    .fill(``)
    .map(() => `http://picsum.photos/300/150?r=${Math.random()}`);
}

const getRandomDestination = () => {
  const destinationArray = DESTINATION.split('. ');

  return getRandomArrayItem(destinationArray)
    .slice(0, 3)
    .join(`. `);
}

const getSignDirection = (typeEvent) => {
  switch (typeEvent) {
    case `flight`:
      return `Sightseeing at ${getRandomArrayItem(SITIES)}`;
    case `taxi`:
      return `Taxi to ${getRandomArrayItem(TAXI)}`;
    case `drive`:
      return `Drive to ${getRandomArrayItem(SITIES)}`;
    case `check-in`:
      return `Check into ${getRandomArrayItem(HOTELS_TYPE)}`;
    default:
      return ``;
  }
}

const getTotalPrice = (offers) => {
  return `${offers.reduce((o) => sum + Number(o.price), 0)}`;
}

const generateEvent = () => {
  const dates = getRandomDates();
  const typeEvent = getRandomArrayItem(TYPE_EVENT);
  const direction = getSignDirection(TYPE_EVENT);
  const offers = OFFERS.filter((o) => o.typeEvent === typeEvent)
    .map((i) => {
      return Array.apply(i, {price: `${i.price}${CURRENCY}`});
    });
  const totalPrice = `${getTotalPrice(offers)}${CURRENCY}`;

  return {
    typeEvent,
    direction,
    totalPrice,
    offers,
    dateStartEvent: dates[0],
    dateFinishEvent: dates[1],
    destination: getRandomDestination(),
    photos: getRandomPhotos()
  }
}

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

export {generateEvent, generateEvents};
