
const menu = [`Table`, `Stats`];

const generateMenuItems = () => {
  return menu.map((item, index) => ({
    title: item,
    link: `#`,
    isActive: index === 0
  }));
};

export {generateMenuItems};
