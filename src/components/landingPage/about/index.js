import { Grid, Row, Col } from "rsuite";
import aboutus from "../../../images/aboutus.jpg";
import "./style.css";
import { Button } from "rsuite";
import { useNavigate } from "react-router-dom";
export const About = () => {
  const navigate = useNavigate();
  return (
    <Grid className="about-us-container">
      <Row className="about-us-row">
        <Col xs={12}>
          <div>
            <h1 className="color-primary">what is blogme ?</h1>
            <p>
              CollectiveRate was created to amplify the buying power of students
              in order to reduce the cost of attaining their dreams. 60% of
              Millennials struggle with student debt and many are fighting to
              stay afloat. We get it. Andrew, one of our founders, developed
              this concept with his wife after trying to find ways to reduce
              their combined student debt which totaled in the 6 figures. We
              learned from our peers that we were not alone in our confusion and
              frustration. We’re here to make a real, positive affect we on our
              members’ lives. Join us and see how much you can save.
            </p>
            <Button
              onClick={() => navigate("/posts")}
              style={{ marginTop: "10px" }}
              className="bg-primary"
            >
              {" "}
              Read posts
            </Button>
          </div>
        </Col>
        <Col xs={12}>
          <img src={aboutus} alt="aboutus" width="500" />
        </Col>
      </Row>
    </Grid>
  );
};
