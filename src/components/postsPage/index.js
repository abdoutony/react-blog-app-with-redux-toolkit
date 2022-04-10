import { Banner } from "../general/banner";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  fetchOnePost,
  fetchTitle,
} from "../../redux/reducers/post";
import { PostsListWrapper } from "./postsList";
import { PostDetailsWrapper } from "./postDetails";
import axios from "axios";
import { BreadCrumb } from "../general/breadCumb";
export const PostsPageWrapper = () => {
  //   const [title, setTitle] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.category) {
      // setTitle(`${params.category} posts`);

      axios
        .get(`http://localhost:4000/api/posts/categories/${params.category}`)
        .then((res) => {
          dispatch(fetchTitle(`${params.category} posts`));
          dispatch(fetchPosts(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (params.id) {
      // setTitle(`Post Details`);

      axios
        .get(`http://localhost:4000/api/posts/${params.id}`)
        .then((res) => {
          dispatch(fetchTitle(`Post Details`));
          dispatch(fetchOnePost(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // setTitle("All possts");

      axios
        .get(`http://localhost:4000/api/posts`)
        .then((res) => {
          dispatch(fetchTitle("All posts"));
          dispatch(fetchPosts(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch, params.id, params.category]);
  const title = useSelector((state) => state.post.title);
  if (params.id) {
    return (
      <>
        <Banner title={title} />

        <PostDetailsWrapper />
      </>
    );
  }
  return (
    <>
      <Banner title={title} />
      <PostsListWrapper />
    </>
  );
};
