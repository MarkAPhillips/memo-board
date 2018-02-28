import { take, put } from 'redux-saga/effects';
import { EDITING_REQUEST, editingUpdate } from '../reducers/ideasReducer';

export function* updateEditingSaga() {
  while (true) {
    const { payload } = yield take(EDITING_REQUEST);
    yield put(editingUpdate(payload));
  }
}
