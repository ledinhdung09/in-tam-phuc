import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ShoppingCartOutlined,
  SettingFilled,
  BarChartOutlined,
} from "@ant-design/icons";
import { FaUsers } from "react-icons/fa";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

function SiderDashboard() {
  const location = useLocation();

  // Map URL pathnames to menu item keys
  const keyMap = {
    "/tong-quan": "1",
    "/don-hang": "2",
    "/dat-hang-nha-in": "3",
    "/nhap-va-giao-hang": "4",

    "/tra-hang": "5",
    "/bao-cao": "6",
    "/khach-hang": "7",
    "/khach-hang/tao-khach-hang": "7",
    "/nha-in": "8",
    "/cau-hinh": "9",
  };

  // Get the current key based on the pathname
  const selectedKey = keyMap[location.pathname] || "1";

  return (
    <Sider style={{ background: "#F5F5F5" }} trigger={null} collapsible>
      <div className="demo-logo-vertical" />
      <Menu
        style={{ background: "#F5F5F5", border: "none", marginTop: "1rem" }}
        mode="inline"
        selectedKeys={[selectedKey]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: <Link to="/tong-quan">Tổng quan</Link>,
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: <Link to="/don-hang">Đơn hàng</Link>,
          },
          {
            key: "3",
            icon: <ShoppingCartOutlined />,
            label: <Link to="/dat-hang-nha-in">Đặt hàng nhà in</Link>,
          },
          {
            key: "4",
            icon: <UploadOutlined />,
            label: <Link to="/nhap-va-giao-hang">Nhập & giao hàng</Link>,
          },

          {
            key: "5",
            icon: <UploadOutlined />,
            label: <Link to="/tra-hang">Trả hàng</Link>,
          },
          {
            key: "6",
            icon: <BarChartOutlined />,
            label: <Link to="/bao-cao">Báo cáo</Link>,
          },
          {
            key: "7",
            icon: <FaUsers />,
            label: <Link to="/khach-hang">Khách hàng</Link>,
          },
          {
            key: "8",
            icon: <UploadOutlined />,
            label: <Link to="/nha-in">Nhà in</Link>,
          },
          {
            key: "9",
            icon: <SettingFilled />,
            label: <Link to="/cau-hinh">Cấu hình</Link>,
          },
        ]}
      />
    </Sider>
  );
}

export default SiderDashboard;
