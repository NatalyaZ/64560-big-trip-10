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

const getRandomDate = () => {
  const date = new Date();
  const sign = getRandomIntegerNumber(0, 7);

  return new Date(date.getYear(), date.getMonth(), date.getDate() + sign, getRandomIntegerNumber(0, 24));
};

const getRandomDates = (date) => {
  const sign = getRandomIntegerNumber(0, 9);
  const diffValue = sign * 600000;
  const dateEnd = new Date(date.getTime() + diffValue);

  return [date, dateEnd];
};

const getRandomPhotos = () => {
  const countPhotos = Math.floor(Math.random() * 10);

  return new Array(countPhotos)
    .fill(``)
    .map(() => `http://picsum.photos/300/150?r=${Math.random()}`);
};

const getRandomDestination = () => {
  const destinationArray = DESTINATION.split(`. `);
  const temp = new Array(getRandomIntegerNumber(0, 3));
  const tempLength = temp.length;
  for (let i = 0; i < tempLength; i++) {
    temp[i] = (getRandomArrayItem(destinationArray));
  }

  return temp.join(`. `);
};

const getSignDirection = (typeEvent) => {
  switch (typeEvent) {
    case `fligh`:
      return `${getRandomArrayItem(SITIES)}`;
    case `taxi`:
      return `${getRandomArrayItem(TAXI)}`;
    case `drive`:
      return `${getRandomArrayItem(SITIES)}`;
    case `check-in`:
      return `${getRandomArrayItem(HOTELS_TYPE)}`;
    default:
      return `${getRandomArrayItem(SITIES)}`;
  }
};

const getTotalPrice = (offers) => {
  return `${offers.reduce((sum, o) => sum + Number(o.price), 0)}`;
};

const generateEvent = () => {
  const dates = getRandomDates(getRandomDate());
  const typeEvent = getRandomArrayItem(TYPE_EVENT);
  const direction = getSignDirection(typeEvent);
  const offers = OFFERS.filter((o) => o.typeEvent === typeEvent);
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
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

export {generateEvent, generateEvents};
