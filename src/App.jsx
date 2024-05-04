import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import LoginFormSplit from "./LoginFormSplit";
import LoginFormTransparent from "./LoginFormTransparent";
import RegisterFormSplit from "./RegisterFormSplit";
import RegisterFormTransparent from "./RegisterFormTransparent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login-split" element={<LoginFormSplit />} />
        <Route path="/register-split" element={<RegisterFormSplit />} />
        <Route path="/login-transparent" element={<LoginFormTransparent />} />
        <Route path="/register-transparent" element={<RegisterFormTransparent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;