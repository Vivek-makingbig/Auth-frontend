import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";

export default function App() {
  const [role, setRole] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setRole={setRole} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={role === "admin" ? <AdminPage /> : <Login setRole={setRole} />} />
        <Route path="/user" element={role === "user" ? <UserPage /> : <Login setRole={setRole} />} />
      </Routes>
    </BrowserRouter>
  );
}