import { BrowserRouter } from "react-router-dom";
import LayoutDashboard from "./components/Layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LayoutDashboard />
    </BrowserRouter>
  );
}

export default App;
