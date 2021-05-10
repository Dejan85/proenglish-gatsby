import { put, call, takeLatest } from 'redux-saga/effects';
import { request } from '@/utils/requests';
import {
  setBlogData,
  fetchBlogData,
  getOneBlogAction,
  getOneBlog,
} from './slice';

function* fetchBlogDataGenerator() {
  try {
    const url = 'blog/get';
    const response = yield call(request, url, 'GET');

    yield put(setBlogData(response));
  } catch (error) {
    yield console.log('test', error);
  }
}

function* getOneBlogDataGenerator(action: any) {
  try {
    const id = action.payload;
    yield put(getOneBlog(id));
  } catch (error) {
    yield console.log('test', error);
  }
}

export default function* watchBlog() {
  yield takeLatest(fetchBlogData.type, fetchBlogDataGenerator);
  yield takeLatest(getOneBlogAction.type, getOneBlogDataGenerator);
}
