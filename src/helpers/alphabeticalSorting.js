export const alphabeticalSorting = (a, b) => {
  return a.localeCompare(b, undefined, {
    numeric: true,
  });
};
