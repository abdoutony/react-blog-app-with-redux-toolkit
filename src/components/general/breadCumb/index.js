import { Breadcrumb } from "rsuite";
import "./style.css";
import { useParams } from "react-router-dom";
export const BreadCrumb = () => {
  const params = useParams();
  if (params.id) {
    return (
      <Breadcrumb className="bread-container">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/posts">posts</Breadcrumb.Item>
        <Breadcrumb.Item active>post details</Breadcrumb.Item>
      </Breadcrumb>
    );
  } else if (params.category) {
    return (
      <Breadcrumb className="bread-container">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/posts">posts</Breadcrumb.Item>
        <Breadcrumb.Item>{params.category}</Breadcrumb.Item>
      </Breadcrumb>
    );
  } else {
    return (
      <Breadcrumb className="bread-container">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/posts">posts</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
};
