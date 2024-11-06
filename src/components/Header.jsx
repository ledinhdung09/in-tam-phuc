import { Button, Flex } from "antd";
import { Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Title } = Typography;

function Header() {
  return (
    <Flex
      style={{
        padding: ".2rem",
        paddingLeft: "1rem",
        background: "#F5F5F5",
        paddingBottom: ".5rem",
      }}
      justify="space-between"
      align="center"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ width: "50px" }}
          src="/logo-removebg-preview.png"
          alt=""
        />
        <Title level={3} style={{ margin: "1rem" }}>
          IN TÂM PHÚC
        </Title>
      </div>
      <Button icon={<UserOutlined />} iconPosition="end">
        Mộng Thùy
      </Button>
    </Flex>
  );
}

export default Header;
