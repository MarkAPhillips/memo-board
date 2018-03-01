import ideas, { LOAD_SUCCESS } from '../../src/reducers/ideasReducer';

describe('Ideas reducer specs', () => {
  let state;
  let initialState;

  it('should return the initial state', () => {
    initialState = { list: {} };
    state = ideas(undefined, {});
    expect(state).toEqual(initialState);
  });


  it('should handle LOAD_SUCCESS', () => {
    initialState = { list: {} };
    state = ideas(initialState, {
      type: LOAD_SUCCESS,
      payload: [{
        id: 1, created_date: '2018-03-01T14:48:00.000Z', title: 'Idea title', body: 'Idea Body',
      }],
    });
    const expected = {
      list: {
        1:
        {
          id: 1,
          created_date: '2018-03-01T14:48:00.000Z',
          title: 'Idea title',
          body: 'Idea Body',
          isBodyEditing: false,
          isTitleEditing: false,
        },
      },
    };
    expect(state).toEqual(expected);
  });
});
