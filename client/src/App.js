import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
