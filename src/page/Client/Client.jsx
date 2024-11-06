import { Button, Input, Layout, Pagination, Table, theme } from "antd";
import { Col, Row } from "antd";
import { Typography } from "antd";
import { PlusCircleFilled, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Content } = Layout;

function Client() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const columns = [
    {
      title: "Khách hàng",
      dataIndex: "id",
      key: "id",
      render: (text) => <div style={{ color: "green" }}>{text}</div>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "revenue",
      key: "revenue",
    },
    {
      title: "Email",
      dataIndex: "datetime",
      key: "datetime",
    },
    {
      title: "Địa chỉ nhận hàng",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Đơn gần nhất",
      key: "actprocessing_staffion",
      dataIndex: "actprocessing_staffion",
      render: (text) => <div style={{ color: "green" }}>{text}</div>,
    },
    {
      title: "Số lượng đơn",
      key: "file_processing_design",
      dataIndex: "file_processing_design",
    },
    {
      title: "Tổng chi tiêu",
      key: "vat",
      dataIndex: "vat",
    },
  ];
  const data = [
    {
      key: "1",
      id: "ANH HÙNG",
      revenue: "0982.321.xxx",
      datetime: "hung.nguyen@email.com",
      actprocessing_staffion: "#12329xxx",
      file_processing_design: "7",
      status: "173 Nguyễn Văn Linh, P.Tân Quy, Q. 7, TP.HCM",
      vat: "3.231.461 đ",
    },
    {
      key: "2",
      id: "ANH HÙNG",
      revenue: "0982.321.xxx",
      datetime: "hung.nguyen@email.com",
      actprocessing_staffion: "#12329xxx",
      file_processing_design: "7",
      status: "173 Nguyễn Văn Linh, P.Tân Quy, Q. 7, TP.HCM",
      vat: "3.231.461 đ",
    },
    {
      key: "3",
      id: "ANH HÙNG",
      revenue: "0982.321.xxx",
      datetime: "hung.nguyen@email.com",
      actprocessing_staffion: "#12329xxx",
      file_processing_design: "7",
      status: "173 Nguyễn Văn Linh, P.Tân Quy, Q. 7, TP.HCM",
      vat: "3.231.461 đ",
    },
    {
      key: "4",
      id: "ANH HÙNG",
      revenue: "0982.321.xxx",
      datetime: "hung.nguyen@email.com",
      actprocessing_staffion: "#12329xxx",
      file_processing_design: "7",
      status: "173 Nguyễn Văn Linh, P.Tân Quy, Q. 7, TP.HCM",
      vat: "3.231.461 đ",
    },
    {
      key: "5",
      id: "ANH HÙNG",
      revenue: "0982.321.xxx",
      datetime: "hung.nguyen@email.com",
      actprocessing_staffion: "#12329xxx",
      file_processing_design: "7",
      status: "173 Nguyễn Văn Linh, P.Tân Quy, Q. 7, TP.HCM",
      vat: "3.231.461 đ",
    },
    {
      key: "6",
      id: "ANH HÙNG",
      revenue: "0982.321.xxx",
      datetime: "hung.nguyen@email.com",
      actprocessing_staffion: "#12329xxx",
      file_processing_design: "7",
      status: "173 Nguyễn Văn Linh, P.Tân Quy, Q. 7, TP.HCM",
      vat: "3.231.461 đ",
    },
    {
      key: "7",
      id: "ANH HÙNG",
      revenue: "0982.321.xxx",
      datetime: "hung.nguyen@email.com",
      actprocessing_staffion: "#12329xxx",
      file_processing_design: "7",
      status: "173 Nguyễn Văn Linh, P.Tân Quy, Q. 7, TP.HCM",
      vat: "3.231.461 đ",
    },
    {
      key: "8",
      id: "ANH HÙNG",
      revenue: "0982.321.xxx",
      datetime: "hung.nguyen@email.com",
      actprocessing_staffion: "#12329xxx",
      file_processing_design: "7",
      status: "173 Nguyễn Văn Linh, P.Tân Quy, Q. 7, TP.HCM",
      vat: "3.231.461 đ",
    },
  ];

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
            Danh sách khách hàng
          </Title>
        </Col>
        <Col>
          <Link to="/khach-hang/tao-khach-hang">
            <Button
              icon={<PlusCircleFilled />}
              iconPosition="start"
              style={{ backgroundColor: "green", color: "white" }}
              type="primary"
            >
              Tạo khách hàng
            </Button>
          </Link>
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
          <Input
            size="large"
            placeholder="Tìm kiếm khách hàng"
            style={{
              marginBottom: 20,
            }}
            prefix={<SearchOutlined />}
          />
          <Table columns={columns} dataSource={data} pagination={false} />
          <Pagination
            align="center"
            style={{
              paddingTop: 10,
            }}
            pageSize={10}
            defaultCurrent={1}
            total={300}
            showSizeChanger={false}
            showLessItems
          />
        </Col>
      </Row>
    </Content>
  );
}

export default Client;
