
const filters = [`everything`, `future`, `past`];

const generateFilters = () => {
  return filters.map((filter, index) => {
    return {
      title: filter,
      isChecked: index === 0
    };
  });
};

export {generateFilters};
