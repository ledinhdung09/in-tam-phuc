import { Button, Form, Input, Layout, theme } from "antd";
import { Col, Row } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { Content } = Layout;

function PrintingHouse() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [form] = Form.useForm();

  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        overflow: "auto",
      }}
    >
      <Row
        style={{
          marginTop: 0,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Col>
          <Title style={{ margin: 0, marginBottom: 16 }} level={3}>
            Danh sách nhà in
          </Title>
        </Col>
        <Col>
          <Button style={{ marginRight: 10 }}>Hủy</Button>
          <Button
            style={{ backgroundColor: "green", color: "white" }}
            type="primary"
          >
            Lưu thông tin
          </Button>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            border: "1px solid black",
            padding: "1rem",
            borderRadius: "10px",
            flex: 2,
            marginRight: 20,
          }}
        >
          <Title style={{ margin: 0, marginBottom: 16 }} level={3}>
            Thông tin chung
          </Title>
          <Form form={form} layout="vertical" autoComplete="off">
            <Row gutter={16}>
              <Col flex={1}>
                <Form.Item name="phone" label="Tên công ty">
                  <Input placeholder="Nhập tên công ty" />
                </Form.Item>
              </Col>
              <Col flex={1}>
                <Form.Item name="email" label="Mã số thuế">
                  <Input placeholder="Nhập mã số thuế" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col flex={1}>
                <Form.Item name="phone" label="Số điện thoại">
                  <Input placeholder="Nhập số điện thoại" />
                </Form.Item>
              </Col>
              <Col flex={1}>
                <Form.Item name="email" label="Email">
                  <Input placeholder="Nhập email" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col flex={1}>
                <Form.Item name="phone" label="Thành phố">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
              <Col flex={1}>
                <Form.Item name="email" label="Quận/ Huyện">
                  <Input placeholder="Quận/ Huyện" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col flex="none">
                <Form.Item
                  style={{ width: "380px" }}
                  name="phone"
                  label="Phường"
                >
                  <Input placeholder="Phường" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col flex={1}>
                <Form.Item name="phone" label="Địa chỉ cụ thể">
                  <Input placeholder="Địa chỉ cụ thể" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col
          style={{
            border: "1px solid black",
            padding: "1rem",
            borderRadius: "10px",
            flex: 1,
            height: "fit-content",
          }}
        >
          <Title style={{ margin: 0, marginBottom: 16 }} level={3}>
            Ghi chú về khách
          </Title>
          <Form.Item name="note">
            <Input.TextArea placeholder="Nhập ghi chú" rows={9} />
          </Form.Item>
        </Col>
      </Row>
    </Content>
  );
}

export default PrintingHouse;
