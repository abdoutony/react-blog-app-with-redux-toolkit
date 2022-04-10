import { useSelector } from "react-redux";
import { Grid, Row, Col } from "rsuite";
import { BreadCrumb } from "../../general/breadCumb";
import { DetailsLeft } from "./DetailsLeft";
import { DetailsRight } from "./DetailsRight";
export const PostDetailsWrapper = () => {
  const post = useSelector((state) => state.post.post);
  return (
    <Grid>
      <Row>
        <BreadCrumb />
      </Row>
      <Row>
        <Col xs={16}>
          <DetailsLeft post={post} />
        </Col>
        <Col xs={8}>
          <DetailsRight />
        </Col>
      </Row>
    </Grid>
  );
};
