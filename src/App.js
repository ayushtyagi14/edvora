import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Orders from "./components/Orders";
import Products from "./components/Products";

function App() {
  return (
    <div className="flex relative bg-gray-700 dark:bg-gray-700">
      <BrowserRouter>
        <div className="lg:w-64 sm:w-48 fixed sidebar dark:bg-secondary-dark-bg dark:bg-gray-800 ">
          <Sidebar />
        </div>
        <div className="flex bg-gray-700 overflow-x-scroll">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />

            <Route path="/Users" element={<Users />} />

            <Route path="/Products" element={<Products />} />

            <Route path="/Orders" element={<Orders />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
