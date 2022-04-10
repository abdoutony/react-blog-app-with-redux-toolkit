import { Card } from "../../general/card";
import { Grid, Col, Row } from "rsuite";
import "./style.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { fetchPosts } from "../../../redux/reducers/post";
import { useDispatch } from "react-redux";

export const Latest = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:4000/api/posts").then((res) => {
      dispatch(fetchPosts(res.data));
    });
  }, []);
  const posts = useSelector((state) => state.post.posts);
  console.log(posts);
  return (
    <Grid className="latest-container">
      <Row>
        <h1 className="color-primary">Our latest posts</h1>
      </Row>
      <Row style={{ paddingTop: "30px" }}>
        {posts
          ? posts.map((post) => {
              return (
                <Col key={post.id} xs={12} sm={12} md={6}>
                  <Card post={post} />
                </Col>
              );
            })
          : "no posts to show"}
      </Row>
    </Grid>
  );
};
