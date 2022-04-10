import "./style.css";
import { Grid, Col, Row } from "rsuite";
export const Footer = () => {
  return (
    <Grid fluid className="bg-primary footer-container">
      <Grid>
        <Row>
          <Col xs={24} sm={24} md={8}>
            <h1 className="color-white">
              Blog<span className="color-secondary">Me</span>
            </h1>
            <p className="color-white">Your way to gain knowledge</p>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="/" className="color-white footer-list-link">
                  Home
                </a>
              </li>
              <li className="footer-list-item">
                <a href="/" className="color-white footer-list-link">
                  Travel
                </a>
              </li>
              <li className="footer-list-item">
                <a href="/" className="color-white footer-list-link">
                  Places
                </a>
              </li>
              <li className="footer-list-item">
                <a href="/" className="color-white footer-list-link">
                  Nature
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="/" className="color-white footer-list-link">
                  abdelkaderlounis207@gatsbyjs.io
                </a>
              </li>
              <li className="footer-list-item">
                <a href="/" className="color-white footer-list-link">
                  abdelkaderlounis98@gmail.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    </Grid>
  );
};
