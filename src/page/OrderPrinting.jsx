import {
  Statistic,
  Layout,
  theme,
  Row,
  Col,
  Button,
  Form,
  Input,
  Typography,
  Tag,
  Table,
  Select,
  Space,
  InputNumber,
  DatePicker,
  Card,
} from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import { PrinterOutlined, DeleteOutlined } from "@ant-design/icons";

function OrderPrinting() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [form] = Form.useForm();

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "productDetails",
      key: "productDetails",
      render: (details) => (
        <div>
          <Text strong style={{ color: "#1890ff" }}>
            {details.name}
          </Text>
          <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
            <ul style={{ paddingLeft: 20, margin: 0, listStyle: "disc" }}>
              {details.attributes.map((attr, index) => (
                <li key={index}>{attr}</li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (src) => <img src={src} alt="Product" style={{ width: 50 }} />,
    },
    {
      title: "ĐVT",
      dataIndex: "unit",
      key: "unit",
      render: () => <Text>Cái</Text>,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity) => (
        <InputNumber min={1} defaultValue={quantity} style={{ width: 60 }} />
      ),
    },
    {
      title: "Đơn giá",
      dataIndex: "unitPrice",
      key: "unitPrice",
      render: (price) => (
        <Input defaultValue={price} prefix="đ" style={{ width: 80 }} />
      ),
    },
    {
      title: "Nhà in",
      dataIndex: "printer",
      key: "printer",
      render: () => (
        <Select defaultValue="In Sáng Tạo" style={{ width: 120 }}>
          <Select.Option value="In Sáng Tạo">In Sáng Tạo</Select.Option>
          <Select.Option value="Nhà In ABC">Nhà In ABC</Select.Option>
        </Select>
      ),
    },
    {
      title: "Thời gian",
      dataIndex: "date",
      key: "date",
      render: () => <DatePicker style={{ width: 120 }} />,
    },
    {
      title: "Thành tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (total) => <Text strong>{total} đ</Text>,
    },
    {
      title: "",
      key: "action",
      render: () => <Button type="text" icon={<DeleteOutlined />} danger />,
    },
  ];

  const data = [
    {
      key: "1",
      productDetails: {
        name: "Bao thư 22x12 cm",
        attributes: ["Kích thước", "Loại in", "Số mặt", "Chất liệu"],
      },
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMgOPQJdwm1NJZAjf7OKalebLcUIxgL0IbA&s",
      quantity: 200,
      unitPrice: "1.550",
      totalPrice: "310.000",
    },
    {
      key: "2",
      productDetails: {
        name: "Bao thư 22x12 cm",
        attributes: ["Kích thước", "Loại in", "Số mặt", "Chất liệu"],
      },
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMgOPQJdwm1NJZAjf7OKalebLcUIxgL0IbA&s",
      quantity: 200,
      unitPrice: "1.550",
      totalPrice: "310.000",
    },
  ];

  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        borderRadius: borderRadiusLG,
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <Space size="large">
          <Col
            style={{
              borderRight: "1px solid",
              marginRight: 16,
              paddingRight: 16,
              fontWeight: "bold",
            }}
          >
            <Statistic
              title="Mã phiếu đặt hàng:"
              value={"#13279xxxx"}
              valueStyle={{ color: "#000", fontWeight: "bold" }}
            />
          </Col>

          <Col
            style={{
              borderRight: "1px solid",
              marginRight: 16,
              paddingRight: 16,
              fontWeight: "bold",
            }}
          >
            <Statistic
              title="Ngày nhận hàng:"
              value={"10/09/2024"}
              valueStyle={{ color: "#000", fontWeight: "bold" }}
            />
          </Col>

          <Col>
            <Statistic
              style={{
                fontWeight: "bold",
              }}
              title="Trạng thái"
              valueRender={() => <Tag color="green">Đã nhận hàng</Tag>}
              valueStyle={{ color: "#000", fontWeight: "bold" }}
            />
          </Col>
        </Space>

        <Button
          type="primary"
          icon={<PrinterOutlined />}
          style={{ float: "right" }}
        >
          In
        </Button>
      </div>

      <Card
        style={{
          margin: "20px auto",
          padding: "20px",
          borderRadius: 10,
        }}
      >
        <Title level={3}>Sản phẩm</Title>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          rowKey="key"
        />
      </Card>

      <Row>
        <Col
          style={{
            padding: "1rem",
            borderRadius: "10px",
            flex: 2,
            marginRight: 20,
            maxHeight: 250,
            background: colorBgContainer,
          }}
        >
          <Title
            style={{ margin: 0, marginBottom: 16, fontWeight: "bold" }}
            level={4}
          >
            Thông tin thêm
          </Title>
          <Form form={form} layout="vertical" autoComplete="off">
            <Row>
              <Col>
                <Typography
                  style={{
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  Người đặt hàng
                </Typography>
                <Space>
                  <Select
                    defaultValue="Phạm Thị Mộng Thùy"
                    style={{ width: "650px" }}
                    options={[
                      {
                        value: "Phạm Thị Mộng Thùy",
                        label: "Phạm Thị Mộng Thùy",
                      },
                    ]}
                  />
                </Space>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col flex={1}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}
                >
                  Ngày nhận hàng dự kiến
                </Typography>
                <Space>
                  <Select
                    defaultValue="20/09/2024"
                    style={{ width: "650px" }}
                    options={[{ value: "20/09/2024", label: "20/09/2024" }]}
                  />
                </Space>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col
          style={{
            padding: "1rem",
            borderRadius: "10px",
            flex: 1,
            height: "fit-content",
            background: colorBgContainer,
          }}
        >
          <Title
            style={{ margin: 0, marginBottom: 16, fontWeight: "bold" }}
            level={4}
          >
            Thông tin hóa đơn
          </Title>

          <Space direction="vertical" style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Text>Tổng tiền hàng:</Text>
              <Text strong>620.000 đ</Text>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Text>Khuyến mãi:</Text>
              <Text>0 đ</Text>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Text>VAT:</Text>
              <Text></Text>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Text strong>Tổng cộng:</Text>
              <Text></Text>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Text>Đặt cọc:</Text>
              <Text></Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <Text>Còn lại:</Text>
              <Text> </Text>
            </div>
          </Space>

          <Form.Item name="note">
            <Input.TextArea placeholder="Nhập ghi chú" rows={3} />
          </Form.Item>
          <Button
            type="primary"
            style={{
              float: "right",
            }}
          >
            XÁC NHẬN ĐẶT HÀNG
          </Button>
        </Col>
      </Row>

      <Button
        color="danger"
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
        variant="solid"
        Solid
      >
        Xóa phiếu
      </Button>
    </Content>
  );
}

export default OrderPrinting;
