import "./style.css";
import { Grid } from "rsuite";
export const Banner = (props) => {
  return (
    <Grid fluid className="banner-container bg-primary-hover">
      <h1 className="text-white">{props.title}</h1>
    </Grid>
  );
};

Banner.defaultProps = {
  title: "Banner title",
};
