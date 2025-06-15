import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/Home";
import DashboardPage from "../pages/Dashboard/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard" element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}