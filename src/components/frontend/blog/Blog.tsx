import React, { useEffect } from 'react';
import './styles.scss';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogData } from '@/components/frontend/home/blog/selectors';
import { reducer, fetchBlogData } from '@/components/frontend/home/blog/slice';
import saga from '@/components/frontend/home/blog/saga';
import RenderUi from './partials/RenderUi';
import { BLOG_SCOPE } from './constants';

const Blog = (): JSX.Element => {
  useInjectReducer({ key: BLOG_SCOPE, reducer });
  useInjectSaga({ key: BLOG_SCOPE, saga });
  const dispatch = useDispatch();
  const { blogData } = useSelector(getBlogData);

  useEffect(() => {
    if (!blogData.length) {
      dispatch(fetchBlogData());
    }
  }, []);

  return <RenderUi blogData={blogData} />;
};

export default Blog;
