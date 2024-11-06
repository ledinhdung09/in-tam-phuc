import { Button, Form, Input, Layout, Radio, theme } from "antd";
import { Col, Row } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Content } = Layout;

function AddClient() {
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
            Thông tin khách hàng
          </Title>
        </Col>
        <Col>
          <Link to="/khach-hang">
            <Button style={{ marginRight: 10 }}>Hủy</Button>
          </Link>
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
            <Form.Item name="name" label="Tên khách hàng">
              <Input placeholder="Nhập tên khách hàng" />
            </Form.Item>
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
              <Col flex="none">
                <Form.Item
                  name="year"
                  label="Năm sinh"
                  style={{ width: "380px" }}
                >
                  <Input placeholder="Nhập năm sinh" />
                </Form.Item>
              </Col>
              <Col flex={1}>
                <Form.Item name="gender" label="Giới tính">
                  <Radio.Group style={{ marginLeft: 16 }} name="gender">
                    <Radio value="male">Nam</Radio>
                    <Radio value="female">Nữ</Radio>
                  </Radio.Group>
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
      <Row>
        <Col
          style={{
            border: "1px solid black",
            padding: "1rem",
            borderRadius: "10px",
            flex: 2,
            marginTop: 20,
          }}
        >
          <Title style={{ margin: 0, marginBottom: 16 }} level={3}>
            Địa chỉ giao hàng
          </Title>
          <Form form={form} layout="vertical" autoComplete="off">
            <Row gutter={16}>
              <Col flex={1}>
                <Form.Item name="phone" label="Tên công ty">
                  <Input placeholder="Tên công ty" />
                </Form.Item>
              </Col>
              <Col flex={1}>
                <Form.Item name="email" label="Mã số thuế">
                  <Input placeholder="Mã số thuế" />
                </Form.Item>
              </Col>
              <Col flex={1}>
                <Form.Item name="email" label="Email công ty">
                  <Input placeholder="Email công ty" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col flex={1}>
                <Form.Item name="phone" label="Thành phố">
                  <Input placeholder="Thành phố" />
                </Form.Item>
              </Col>
              <Col flex={1}>
                <Form.Item name="email" label="Quận/ Huyện">
                  <Input placeholder="Quận/ Huyện" />
                </Form.Item>
              </Col>
              <Col flex={1}>
                <Form.Item name="email" label="Phường">
                  <Input placeholder="Phường" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col flex={1}>
                <Form.Item name="email" label="Địa chỉ cụ thể">
                  <Input placeholder="Địa chỉ cụ thể" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Content>
  );
}

export default AddClient;
