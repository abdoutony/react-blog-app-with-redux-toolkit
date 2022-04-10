import { useSelector } from "react-redux";
import { Card2 } from "../../general/card2";
import { Grid, Row, Col } from "rsuite";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../../redux/reducers/post";
import axios from "axios";
export const DetailsRight = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  useEffect(() => {
    axios.get("http://localhost:4000/api/posts").then((res) => {
      dispatch(fetchPosts(res.data));
    });
  }, []);

  return (
    <Grid fluid>
      <Row>
        <h4>Latest posts</h4>
      </Row>
      <Row>
        {posts
          ? posts
              .map((post) => {
                return (
                  <Col key={post.id}>
                    <Card2
                      id={post._id}
                      image={post.image}
                      title={post.title}
                    />
                  </Col>
                );
              })
              .slice(0, 2)
          : "no posts to show"}
      </Row>
    </Grid>
  );
};
