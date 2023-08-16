import { Route, Routes } from "react-router-dom";
import LoginCreate from "../Components/LoginCreate";
import LoginPasswordLost from "../Components/LoginPasswordLost";
import LoginPasswordReset from "../Components/LoginPasswordReset";
import LoginForm from "../Components/LoginForm";
import Home from "../Components/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/*" element={<LoginForm />} />
      <Route path="/criar" element={<LoginCreate />} />
      <Route path="/perdeu" element={<LoginPasswordLost />} />
      <Route path="/resetar" element={<LoginPasswordReset />} />
    </Routes>
  );
}
