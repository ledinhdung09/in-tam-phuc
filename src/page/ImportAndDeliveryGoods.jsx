import { Layout, theme } from "antd";
const { Content } = Layout;
function ImportAndDeliveryGoods() {
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
      Nhập và giao hàng
    </Content>
  );
}

export default ImportAndDeliveryGoods;
