import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/Home";
import DashboardPage from "../pages/Dashboard/Dashboard";
import Donation from "@/pages/Donation/Donation";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/donation/:userId" element={<Donation/>}/>
      </Routes>
    </BrowserRouter>
  )
}