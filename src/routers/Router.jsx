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

function RouterDashboard() {
  return (
    <>
      <Routes>
        <Route path="/tong-quan" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/don-hang" element={<Order />} />
        <Route path="/dat-hang-nha-in" element={<OrderPrinting />} />
        <Route path="/nhap-va-giao-hang" element={<ImportAndDeliveryGoods />} />
        <Route path="/tra-hang" element={<ReturnGoods />} />
        <Route path="/nha-in" element={<PrintingHouse />} />
        <Route path="/bao-cao" element={<Report />} />
        <Route path="/khach-hang" element={<Client />} />
        <Route path="/cau-hinh" element={<Settings />} />
        <Route path="/khach-hang/tao-khach-hang" element={<AddClient />} />
      </Routes>
    </>
  );
}

export default RouterDashboard;
