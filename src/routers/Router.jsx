import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Order from "../page/Order";
import OrderPrinting from "../page/OrderPrinting";
import ImportAndDeliveryGoods from "../page/ImportAndDeliveryGoods";
import ReturnGoods from "../page/ReturnGoods";
import PrintingHouse from "../page/PrintingHouse";
import Report from "../page/Report";
import Client from "../page/Client/Client";
import Settings from "../page/Settings";
import AddClient from "../page/Client/AddClient";
import Login from "../page/Auth/Login";
import ProtectedRoute from "./ProtectedRoute"; // Đường dẫn đến file ProtectedRoute

function RouterDashboard() {
  // Kiểm tra trạng thái đăng nhập (ví dụ: token trong localStorage)
  const isAuthenticated = !!localStorage.getItem("authToken");

  return (
    <Routes>
      {/* Route không cần đăng nhập */}
      <Route path="/dang-nhap" element={<Login />} />

      {/* Routes cần bảo vệ */}
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tong-quan"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/don-hang"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Order />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dat-hang-nha-in"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <OrderPrinting />
          </ProtectedRoute>
        }
      />
      <Route
        path="/nhap-va-giao-hang"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ImportAndDeliveryGoods />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tra-hang"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ReturnGoods />
          </ProtectedRoute>
        }
      />
      <Route
        path="/nha-in"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <PrintingHouse />
          </ProtectedRoute>
        }
      />
      <Route
        path="/bao-cao"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Report />
          </ProtectedRoute>
        }
      />
      <Route
        path="/khach-hang"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Client />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cau-hinh"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/khach-hang/tao-khach-hang"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AddClient />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default RouterDashboard;
