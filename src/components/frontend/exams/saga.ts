import { takeLatest, call, put } from 'redux-saga/effects';
import { request } from '@/utils/requests';
import { fetchExamsData, setExamsData } from './slice';

function* fetchExamsDataGenerator() {
  try {
    const url = 'exams/get';
    const response = yield call(request, url, 'GET');

    yield put(setExamsData(response));
  } catch (err) {
    yield console.log('test', err);
  }
}

export default function* watchExams() {
  yield takeLatest(fetchExamsData.type, fetchExamsDataGenerator);
}
