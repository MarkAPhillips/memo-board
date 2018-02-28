import { take, call, put } from 'redux-saga/effects';
import { deleteIdea } from '../services/ideasService';
import { DELETE_REQUEST, successDelete } from '../reducers/ideasReducer';

export function* deleteIdeaSaga() {
  while (true) {
    const { payload } = yield take(DELETE_REQUEST);
    yield call(deleteIdea, payload);
    yield put(successDelete(payload));
  }
}
