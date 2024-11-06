import { Layout, theme } from "antd";
const { Content } = Layout;
function OrderPrinting() {
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
      đặt hàng nhà in
    </Content>
  );
}

export default OrderPrinting;
