import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/Home";
import DashboardPage from "../pages/Dashboard/Dashboard";
import Donation from "@/pages/Donation/Donation";
import PrivateRoute from "./privateRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/donation/:userId" element={<Donation/>}/>

        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<DashboardPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}