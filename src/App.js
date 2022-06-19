import React from "react";
import Todo from "./components/Todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/style.css";

const Test = () => <div>Dashboard</div>

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
