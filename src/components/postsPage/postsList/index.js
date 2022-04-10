import { useSelector } from "react-redux";
import { Grid, Row, Col } from "rsuite";
import { BreadCrumb } from "../../general/breadCumb";
import { Card } from "../../general/card";
export const PostsListWrapper = () => {
  const posts = useSelector((state) => state.post.posts);
  return (
    <Grid>
      <Row>
        <BreadCrumb  />
      </Row>
      <Row>
        {posts
          ? posts.map((post) => {
              return (
                <Col md={6} key={post.id} sm={12}>
                  <Card post={post} />
                </Col>
              );
            })
          : "no posts to show"}
      </Row>
    </Grid>
  );
};
