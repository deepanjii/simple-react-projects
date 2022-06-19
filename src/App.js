import React from "react";
import Dashboard from "./components/Todo/Dashboard";
import Todo from "./components/Todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/style.css";

const Test = () => <div>Dashboard</div>

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
