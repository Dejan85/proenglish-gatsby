import { createSlice, createAction } from '@reduxjs/toolkit';
import { base64 } from '@/utils/base64';
import { BLOG_SCOPE } from './constants';
import { DataType, InitialStateType } from './types';

export const initialState: InitialStateType = {
  blogData: [],
  oneBlogData: null,
};

const blogSlice = createSlice({
  name: BLOG_SCOPE,
  initialState,
  reducers: {
    setBlogData(state, action) {
      const data: object[] = action.payload.data.map(
        ({
          photo: {
            data: { data },
          },
          body,
          postedBy,
          created,
          _id,
          title,
          description,
        }: DataType) => {
          return {
            // photo: base64(data),
            photo: data,
            created,
            _id,
            title,
            description,
            body,
            postedBy,
          };
        },
      );
      state.blogData = data;
    },
    getOneBlog(state, action) {
      state.oneBlogData = state.blogData.filter((blog: any) => {
        if (blog._id === action.payload) {
          return blog;
        }
      });
    },
  },
});

export const fetchBlogData = createAction('get_blog_data');
export const getOneBlogAction = createAction<Record<string, any>>(
  'get_one_data',
);

export const { setBlogData, getOneBlog } = blogSlice.actions;
export const { reducer } = blogSlice;
