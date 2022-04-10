import { NavBar } from "../general/navbar";
import { Footer } from "../general/footer";
import { useState } from "react";
export const BlogLayout = ({ children }) => {
  const [activeKey, setActiveKey] = useState(null);
  return (
    <>
      <NavBar activeKey={activeKey} onSelect={setActiveKey} />
      {children}
      <Footer />
    </>
  );
};
