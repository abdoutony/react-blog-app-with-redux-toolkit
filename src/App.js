import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { PostsPage } from "./pages/posts";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts, fetchOnePost, fetchTitle } from "./redux/reducers/post";
import axios from "axios";
import { useParams } from "react-router-dom";
function App() {
  const [title, setTitle] = useState(null);
  // const params = useParams();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (params.category) {
  //     // setTitle(`${params.category} posts`);

  //     axios
  //       .get(`http://localhost:4000/api/posts/categories/${params.category}`)
  //       .then((res) => {
  //         dispatch(fetchTitle(`${params.category} posts`));
  //         dispatch(fetchPosts(res.data));
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (params.id) {
  //     // setTitle(`Post Details`);

  //     axios
  //       .get(`http://localhost:4000/api/posts/${params.id}`)
  //       .then((res) => {
  //         dispatch(fetchTitle(`Post Details`));
  //         dispatch(fetchOnePost(res.data));
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     // setTitle("All possts");

  //     axios
  //       .get(`http://localhost:4000/api/posts`)
  //       .then((res) => {
  //         dispatch(fetchTitle("All posts"));
  //         dispatch(fetchPosts(res.data));
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [dispatch, params.id, params.category]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />}>
          <Route path=":id" />
          <Route path="categories/:category" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
