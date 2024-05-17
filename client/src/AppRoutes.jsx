// Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./components/users";

const AppRoutes = () => (
  <Routes>
    <Route path="/users" element={<Users />} />
  </Routes>
);

export default AppRoutes;
