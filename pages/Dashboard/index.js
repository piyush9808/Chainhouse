import React, { useState } from "react";
import DashboardComponents from "../../components/DashboardComponent";
// import Layout from '../../components/layout';
import Layout from "../../components/layout/index";
const Page = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <Layout>
      <DashboardComponents />
    </Layout>
  );
};

export default Page;
