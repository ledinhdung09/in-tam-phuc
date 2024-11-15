import { Layout, theme } from "antd";
const { Content } = Layout;
function Settings() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      Cấu hình
    </Content>
  );
}

export default Settings;
