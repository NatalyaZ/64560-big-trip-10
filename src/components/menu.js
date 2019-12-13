
const createMenuItemMarkup = (item) => {
  const {title, link, isActive} = item;
  const activeClass = isActive ? `trip-tabs__btn--active` : ``;
  return (
    `<a class="trip-tabs__btn ${activeClass}" href="${link}">${title}</a>`
  );
};

export const renderMenuTemplate = (menu) => {
  return (
    `<nav class="trip-controls__trip-tabs trip-tabs">
      ${menu.map(createMenuItemMarkup).join(`\n`)}
    </nav>`
  );
};
