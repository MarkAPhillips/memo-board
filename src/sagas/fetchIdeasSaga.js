import { take, put, call } from 'redux-saga/effects';
import { LOAD_REQUEST, successLoad } from '../reducers/ideasReducer';
import { getIdeas } from '../services/ideasService';

export function* fetchIdeasSaga() {
  yield take(LOAD_REQUEST);
  const response = yield call(getIdeas);
  const payload = yield response.data;
  yield put(successLoad(payload));
}
