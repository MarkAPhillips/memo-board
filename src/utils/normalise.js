import keyBy from 'lodash/keyBy';

const normalise = (items) => {
  const ui = { isTitleEditing: false, isBodyEditing: false };
  const enhanced =
    items.map(item => Object.assign({}, item, ui));
  return keyBy(enhanced, 'id');
};

export default normalise;
