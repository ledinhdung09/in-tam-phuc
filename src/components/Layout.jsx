import { Divider, Layout } from "antd";
import SiderDashboard from "./Sider";

//import router from "routers/router";
import Header from "./Header";
import RouterDashboard from "../routers/router";
const LayoutDashboard = () => {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Divider
        style={{
          margin: 0,
          borderColor: "#8d99ae",
          height: "2.5px",
          background: "#ababab",
        }}
      />
      <Layout style={{ flex: 1, overflow: "hidden" }}>
        <SiderDashboard />
        <Layout style={{ overflowY: "auto" }}>
          <RouterDashboard />
        </Layout>
      </Layout>
    </div>
  );
};
export default LayoutDashboard;
