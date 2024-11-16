import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { postLoginAPI } from "../../apis/handleDataAPI";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  // Hàm xử lý đăng nhập
  const handleLogin = async (values) => {
    const { username, password } = values; // Lấy giá trị từ Form
    try {
      const response = await postLoginAPI(username, password);
      console.log(response);
      if (response) {
        login(response.data.session_token);
        localStorage.setItem("username", response.data.username);
        navigate("/tong-quan"); // Chuyển hướng đến trang chủ
      } else {
        alert("Mật khẩu không chính xác!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "100px",
      }}
    >
      <div style={{ maxWidth: "400px" }}>
        <Form
          name="login_form"
          initialValues={{ remember: true }}
          onFinish={handleLogin} // Gắn trực tiếp vào Form
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit" // Sử dụng submit để kích hoạt `onFinish`
              style={{ width: "100%", marginTop: "10px" }}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
