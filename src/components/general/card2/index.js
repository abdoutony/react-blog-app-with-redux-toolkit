import "./style.css";
import { useNavigate } from "react-router-dom";
export const Card2 = ({ id, image, title }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className="card-two-container">
      <div className="image-wrapper">
        <img src={image} alt="cartimg" />
      </div>
      <div className="title-wrapper" onClick={handleNavigate}>
        {title}
      </div>
    </div>
  );
};
