import { Button, Layout, Pagination, Table, Tabs, theme } from "antd";
import { useState } from "react";

const { Content } = Layout;

function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [activeKey, setActiveKey] = useState("1"); // State để lưu key của tab đang hoạt động

  const onChange = (key) => {
    setActiveKey(key); // Cập nhật active key khi tab được chọn
    console.log(key);
  };

  const columns = [
    {
      title: "Mã đơn",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Doanh thu",
      dataIndex: "revenue",
      key: "revenue",
      render: (text) => (
        <div style={{ whiteSpace: "normal" }}>
          {text.split("  ").map((item, index) => (
            <div key={index}>{item}</div> // Tách từng dòng
          ))}
        </div>
      ),
    },
    {
      title: "Thời gian",
      dataIndex: "datetime",
      key: "datetime",
      render: (text) => (
        <div style={{ whiteSpace: "normal" }}>
          {text.split("  ").map((item, index) => (
            <div key={index}>{item}</div> // Tách từng dòng
          ))}
        </div>
      ),
    },
    {
      title: "Tình trạng",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let color;
        switch (status) {
          case "Đang báo giá":
            color = "orange";
            break;
          case "Đang in":
            color = "blue";
            break;
          case "Đã hoàn thành":
            color = "green";
            break;
          case "Đã hủy":
            color = "red";
            break;
          default:
            color = "black";
        }
        return <span style={{ color }}>{status}</span>;
      },
    },
    {
      title: "Nhân viên xử lý",
      key: "actprocessing_staffion",
      dataIndex: "actprocessing_staffion",
    },
    {
      title: "Thiết kế xử lý file",
      key: "file_processing_design",
      dataIndex: "file_processing_design",
    },
    {
      title: "Hóa đơn VAT",
      key: "vat",
      dataIndex: "vat",
      render: (text) => <a>{text}</a>,
    },
  ];
  const data = [
    {
      key: "1",
      id: "127296xx",
      revenue: "DS: 1.200.000 đ  CP: 690.000 đ  LN: 510.000 đ",
      datetime: "ĐH: 07/08/24  GH: 10/09/24",
      actprocessing_staffion: "Nguyễn Huỳnh Minh Anh",
      file_processing_design: "Nguyễn Đoàn Quốc Bảo",
      status: "Đang báo giá",
      vat: "Xem hóa đơn",
    },
    {
      key: "2",
      id: "127296xx",
      revenue: "DS: 1.200.000 đ  CP: 690.000 đ  LN: 510.000 đ",
      datetime: "ĐH: 07/08/24  GH: 10/09/24",
      actprocessing_staffion: "Nguyễn Huỳnh Minh Anh",
      file_processing_design: "Nguyễn Đoàn Quốc Bảo",
      status: "Đang báo giá",
      vat: "Xem hóa đơn",
    },
    {
      key: "3",
      id: "127296xx",
      revenue: "DS: 1.200.000 đ  CP: 690.000 đ  LN: 510.000 đ",
      datetime: "ĐH: 07/08/24  GH: 10/09/24",
      actprocessing_staffion: "Nguyễn Huỳnh Minh Anh",
      file_processing_design: "Nguyễn Đoàn Quốc Bảo",
      status: "Đang in",
      vat: "Xem hóa đơn",
    },
    {
      key: "4",
      id: "127296xx",
      revenue: "DS: 1.200.000 đ  CP: 690.000 đ  LN: 510.000 đ",
      datetime: "ĐH: 07/08/24  GH: 10/09/24",
      actprocessing_staffion: "Nguyễn Huỳnh Minh Anh",
      file_processing_design: "Nguyễn Đoàn Quốc Bảo",
      status: "Đã hoàn thành",
      vat: "Xem hóa đơn",
    },
    {
      key: "5",
      id: "127296xx",
      revenue: "DS: 1.200.000 đ  CP: 690.000 đ  LN: 510.000 đ",
      datetime: "ĐH: 07/08/24  GH: 10/09/24",
      actprocessing_staffion: "Nguyễn Huỳnh Minh Anh",
      file_processing_design: "Nguyễn Đoàn Quốc Bảo",
      status: "Đã hủy",
      vat: "Xem hóa đơn",
    },
    {
      key: "6",
      id: "127296xx",
      revenue: "DS: 1.200.000 đ  CP: 690.000 đ  LN: 510.000 đ",
      datetime: "ĐH: 07/08/24  GH: 10/09/24",
      actprocessing_staffion: "Nguyễn Huỳnh Minh Anh",
      file_processing_design: "Nguyễn Đoàn Quốc Bảo",
      status: "Đang in",
      vat: "Xem hóa đơn",
    },
    {
      key: "7",
      id: "127296xx",
      revenue: "DS: 1.200.000 đ  CP: 690.000 đ  LN: 510.000 đ",
      datetime: "ĐH: 07/08/24  GH: 10/09/24",
      actprocessing_staffion: "Nguyễn Huỳnh Minh Anh",
      file_processing_design: "Nguyễn Đoàn Quốc Bảo",
      status: "Đã hoàn thành",
      vat: "Xem hóa đơn",
    },
    {
      key: "8",
      id: "127296xx",
      revenue: "DS: 1.200.000 đ  CP: 690.000 đ  LN: 510.000 đ",
      datetime: "ĐH: 07/08/24  GH: 10/09/24",
      actprocessing_staffion: "Nguyễn Huỳnh Minh Anh",
      file_processing_design: "Nguyễn Đoàn Quốc Bảo",
      status: "Đã hủy",
      vat: "Xem hóa đơn",
    },
  ];

  const items = [
    {
      key: "1",
      label: (
        <Button
          style={{
            backgroundColor: activeKey === "1" ? "#348F63" : undefined,
            color: activeKey === "1" ? "#fff" : undefined,
          }}
        >
          Tất cả đơn hàng
        </Button>
      ),
      children: (
        <>
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
        </>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          style={{
            backgroundColor: activeKey === "2" ? "#348F63" : undefined,
            color: activeKey === "2" ? "#fff" : undefined,
          }}
        >
          Đang báo giá
        </Button>
      ),
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: (
        <Button
          style={{
            backgroundColor: activeKey === "3" ? "#348F63" : undefined,
            color: activeKey === "3" ? "#fff" : undefined,
          }}
        >
          Đang đặt nhà in
        </Button>
      ),
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: (
        <Button
          style={{
            backgroundColor: activeKey === "4" ? "#348F63" : undefined,
            color: activeKey === "4" ? "#fff" : undefined,
          }}
        >
          Đã hoàn thành
        </Button>
      ),
      children: "Content of Tab Pane 4",
    },
    {
      key: "5",
      label: (
        <Button
          style={{
            backgroundColor: activeKey === "5" ? "#348F63" : undefined,
            color: activeKey === "5" ? "#fff" : undefined,
          }}
        >
          Đã hủy
        </Button>
      ),
      children: "Content of Tab Pane 5",
    },
  ];

  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        overflow: "auto",
      }}
    >
      <Tabs
        defaultActiveKey="1"
        style={{ paddingTop: 0 }}
        items={items}
        onChange={onChange}
      />
    </Content>
  );
}

export default Home;
