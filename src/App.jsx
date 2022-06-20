import React from 'react';
import Dashboard from './components/Dashboard';
// import Todo from './components/Todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/style.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="todo" element={<Todo />} />
    </Routes>
  </BrowserRouter>
);

export default App;
