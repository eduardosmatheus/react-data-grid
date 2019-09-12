import { getMixedTypeValueRetriever, isImmutableCollection } from 'common/utils';

export const comparer = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};

const parseValue = (value) => {
  // Workaround 'cause typeof null is equal object.
  return (value && typeof value === 'object')
    ? value.value
    : value;
};

const sortRows = (rows, sortColumn, sortDirection) => {
  const { getValue } = getMixedTypeValueRetriever(isImmutableCollection(rows));
  const sortDirectionSign = sortDirection === 'ASC' ? 1 : -1;
  const rowComparer = (a, b) => {
    const aValue = parseValue(getValue(a, sortColumn));
    const bValue = parseValue(getValue(b, sortColumn));
    return sortDirectionSign * comparer(aValue, bValue);
  };
  if (sortDirection === 'NONE') {
    return rows;
  }
  return rows.slice().sort(rowComparer);
};

export default sortRows;


