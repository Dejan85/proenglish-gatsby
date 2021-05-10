import React, { useEffect } from 'react';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogData } from '@/components/frontend/home/blog/selectors';
import {
  reducer,
  getOneBlogAction,
  fetchBlogData,
} from '@/components/frontend/home/blog/slice';
import saga from '@/components/frontend/home/blog/saga';
// import { withRouter } from 'react-router-dom';
import { Loading } from '@/components/ui';
import RenderOneBlogPage from './partials/RenderOneBlogPage';
import { BLOG_SCOPE } from './constants';

const BlogPage = (props: any): JSX.Element => {
  useInjectReducer({ key: BLOG_SCOPE, reducer });
  useInjectSaga({ key: BLOG_SCOPE, saga });
  const dispatch = useDispatch();
  const { match } = props;
  const { blogData, oneBlogData } = useSelector(getBlogData);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!blogData.length) {
      dispatch(fetchBlogData());
    }
  }, []);

  useEffect(() => {
    // dispatch(getOneBlogAction(match.params.blogId));
  }, [blogData]);

  return oneBlogData?.length ? (
    <RenderOneBlogPage oneBlogData={oneBlogData} />
  ) : (
    <Loading height="100vh" />
  );
};

export default BlogPage;
