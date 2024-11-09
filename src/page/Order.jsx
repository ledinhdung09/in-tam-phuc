import {
  Upload,
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
import {
  PrinterOutlined,
  DeleteOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

function Order() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
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
      render: () => {
        return (
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        );
      },
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

        <Space style={{ float: "right" }}>
          <Button type="primary">Trả hàng</Button>

          <Button type="primary" icon={<PrinterOutlined />}>
            In
          </Button>
        </Space>
      </div>

      <Row>
        <Col
          style={{
            padding: "1rem",
            borderRadius: "10px",
            flex: 2,
            marginRight: 20,
            background: colorBgContainer,
          }}
        >
          <Title
            style={{ margin: 0, marginBottom: 16, fontWeight: "bold" }}
            level={4}
          >
            Thông tin khách hàng
          </Title>

          <Space direction="vertical" style={{ width: "100%" }}>
            <Title
              style={{
                marginTop: 0,
              }}
              level={4}
            >
              Anh Hùng
            </Title>

            <Text>Công ty TNHH ABC</Text>
            <div style={{ display: "flex" }}>
              <Text>Mã số thuế: </Text>
              <Text></Text>
            </div>
            <div style={{ display: "flex" }}>
              <Text>Số điện thoại: </Text>
              <Text></Text>
            </div>
            <div style={{ display: "flex" }}>
              <Text>
                Địa chỉ: 102 Nguyễn Văn Linh, Phường X, Quận Y, TP. HCM
              </Text>
            </div>
          </Space>
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
            Ghi chú về khách hàng
          </Title>

          <Space direction="vertical" style={{ width: "100%" }}>
            <ul>
              <li>Kỹ tính</li>
              <li>Quan trọng chất lượng, tiền không phải vấn đề</li>
              <li>Giao hàng nhanh, đúng hẹn</li>
            </ul>
          </Space>

          <Button
            Text
            type="text"
            style={{
              float: "right",
            }}
          >
            Xem chi tiết
          </Button>
        </Col>
      </Row>

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
                  Nhân viên xử lý
                </Typography>
                <Space>
                  <Select
                    defaultValue="Nguyễn Huỳnh Minh Anh"
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
            <Row>
              <Col>
                <Typography
                  style={{
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  Thiết kế xác nhận
                </Typography>
                <Space>
                  <Select
                    defaultValue="Nguyễn Đoàn Quốc Bảo"
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
                    defaultValue="29/08/2024"
                    style={{ width: "650px" }}
                    options={[{ value: "20/09/2024", label: "20/09/2024" }]}
                  />
                </Space>
              </Col>
            </Row>
            <Row>
              <Col>
                <Typography
                  style={{
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  Địa điểm nhận hàng
                </Typography>
                <Space>
                  <Input
                    style={{ width: "650px" }}
                    placeholder="Nhập địa chỉ nhận hàng"
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
          <Row
            style={{
              gap: 20,
            }}
          >
            <Col>
              <Button Outlined color="primary" style={{}}>
                LƯU THÔNG TIN
              </Button>
            </Col>

            <Col>
              <Button type="primary" style={{}}>
                XÁC NHẬN ĐẶT HÀNG
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Button
        color="danger"
        style={{
          marginTop: "2rem",
        }}
        variant="solid"
        Solid
      >
        Xóa phiếu
      </Button>

      <Title
        style={{
          margin: 0,
          marginTop: 24,
          marginBottom: 12,
          fontWeight: "bold",
        }}
        level={4}
      >
        LỊCH SỬ HOẠT ĐỘNG
      </Title>
      <Space>
        <ul>
          <li>
            <Row style={{ display: "flex", gap: 6 }}>
              <Col>09:20 29/08/2024: </Col>
              <Col>Phiếu được tạo bởi</Col>
              <Col style={{ color: "green" }}>Nguyễn Huỳnh Minh Anh</Col>
            </Row>
          </li>
        </ul>
      </Space>
    </Content>
  );
}

export default Order;
