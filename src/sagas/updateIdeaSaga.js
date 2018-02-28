import omit from 'lodash/omit';
import { take, call, put } from 'redux-saga/effects';
import { updateIdea } from '../services/ideasService';
import { UPDATE_REQUEST, successUpdate } from '../reducers/ideasReducer';

export function* updateIdeaSaga() {
  while (true) {
    const { payload } = yield take(UPDATE_REQUEST);
    const data = omit(payload, ['isTitleEditing', 'isBodyEditing']);
    yield call(updateIdea, data);
    yield put(successUpdate(payload));
  }
}
