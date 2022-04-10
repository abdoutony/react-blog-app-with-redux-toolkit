import { Grid, Row, Col } from "rsuite";
import { formatDate } from "../../../helpers/formatDate";
export const DetailsLeft = ({ post }) => {
  return (
    <Grid fluid>
      <Row>
        <Col>
          <img src={post.image} width="500" height="350 " alt="postimg" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="color-primary">{post.title}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{formatDate(post.createdAt)}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{post.body}</p>
        </Col>
      </Row>
    </Grid>
  );
};
