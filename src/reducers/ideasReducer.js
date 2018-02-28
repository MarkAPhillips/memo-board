import values from 'lodash/values';
import orderBy from 'lodash/orderBy';
import API from '../constants';
import { actionCreator } from './actionCreator';
import normalise from '../utils/normalise';

// Actions
export const LOAD_REQUEST = `${API.APP_ID}/ideas/LOAD_REQUEST`;
export const LOAD_SUCCESS = `${API.APP_ID}/ideas/LOAD_SUCCESS`;
export const LOAD_FAIL = `${API.APP_ID}/ideas/LOAD_FAIL`;

export const CREATE_REQUEST = `${API.APP_ID}/ideas/CREATE_REQUEST`;
export const CREATE_SUCCESS = `${API.APP_ID}/ideas/CREATE_SUCCESS`;
export const CREATE_FAIL = `${API.APP_ID}/ideas/CREATE_FAIL`;

export const UPDATE_REQUEST = `${API.APP_ID}/ideas/UPDATE_REQUEST`;
export const UPDATE_SUCCESS = `${API.APP_ID}/ideas/UPDATE_SUCCESS`;
export const UPDATE_FAIL = `${API.APP_ID}/ideas/UPDATE_FAIL`;

export const DELETE_REQUEST = `${API.APP_ID}/ideas/DELETE_REQUEST`;
export const DELETE_SUCCESS = `${API.APP_ID}/ideas/DELETE_SUCCESS`;
export const DELETE_FAIL = `${API.APP_ID}/ideas/DELETE_FAIL`;

export const EDITING_REQUEST = `${API.APP_ID}/ideasEDITING_REQUEST`;
export const EDITING_SUCCESS = `${API.APP_ID}/ideas/EDITING_SUCCESS`;

// Reducer
const initialState = {
  list: {},
};

export default function ideas(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUCCESS:
      return { ...state, list: normalise(action.payload) };
    case CREATE_SUCCESS: {
      const { payload } = action;
      const { id, created_date, title, body } = payload; // eslint-disable-line
      return {
        list: {
          ...state.list,
          [id]: {
            id, created_date, isTitleEditing: true, title, body, isBodyEditing: false,
          },
        },
      };
    }
    case UPDATE_SUCCESS: {
      const { payload } = action;
      const { id, title, body } = payload;
      const list = state.list[id];
      return {
        list: {
          ...state.list,
          [id]: {
            ...list,
            title,
            body,
            isBodyEditing: false,
            isTitleEditing: false,
          },
        },
      };
    }
    case DELETE_SUCCESS: {
      const { id } = action.payload;
      const list = Object.assign({}, state.list);
      delete list[id];
      return { ...state, list };
    }
    case EDITING_SUCCESS: {
      const { payload } = action;
      const { id, isTitleEditing, isBodyEditing } = payload;
      const list = state.list[id];
      return {
        list: {
          ...state.list,
          [id]: {
            ...list,
            isTitleEditing,
            isBodyEditing,
          },
        },
      };
    }
    default:
      return state;
  }
}

// Action Creators
export const requestLoad = actionCreator(LOAD_REQUEST);
export const successLoad = actionCreator(LOAD_SUCCESS, 'payload');

export const requestCreate = actionCreator(CREATE_REQUEST);
export const successCreate = actionCreator(CREATE_SUCCESS, 'payload');

export const requestUpdate = actionCreator(UPDATE_REQUEST, 'payload');
export const successUpdate = actionCreator(UPDATE_SUCCESS, 'payload');

export const requestDelete = actionCreator(DELETE_REQUEST, 'payload');
export const successDelete = actionCreator(DELETE_SUCCESS, 'payload');

export const requestEditing = actionCreator(EDITING_REQUEST, 'payload');
export const editingUpdate = actionCreator(EDITING_SUCCESS, 'payload');

// Selectors
export const ideasDefaultSelector = state => orderBy(values(state.ideas.list), ['created_date'], ['desc']);
