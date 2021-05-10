import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from '@/utils/requests';
import { fetchAboutDataAction, setAboutData } from './slice';

function* fetchAboutDataGenerator() {
  try {
    const url = 'about/get';
    const response = yield call(request, url, 'GET');
    yield put(setAboutData(response));
  } catch (error) {
    yield console.log('test', error);
  }
}

export default function* watchAbout() {
  yield takeLatest(fetchAboutDataAction.type, fetchAboutDataGenerator);
}
