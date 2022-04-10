import { Panel, Button } from "rsuite";
import { useNavigate } from "react-router-dom";
export const Card = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Panel shaded bordered bodyFill style={{ display: "inline-block" }}>
      <img src={post.image} alt="cardimg" height="175" width="275" />
      <Panel header={post.title}>
        <Button
          onClick={() => navigate(`/posts/${post._id}`)}
          style={{ marginTop: "10px" }}
          className="bg-primary"
        >
          Read More
        </Button>
      </Panel>
    </Panel>
  );
};
