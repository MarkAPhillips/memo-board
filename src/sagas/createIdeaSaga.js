import { take, call, put } from 'redux-saga/effects';
import { CREATE_REQUEST, successCreate } from '../reducers/ideasReducer';
import { getNewIdea } from '../services/ideasService';

export function* createIdeaSaga() {
  while (true) {
    yield take(CREATE_REQUEST);
    const response = yield call(getNewIdea);
    yield put(successCreate(response.data));
  }
}
