import React from 'react';
import Achievements from './components/Achievements';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Todo from './components/Todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/style.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="todo" element={<Todo />} />
      <Route path="projects" element={<Projects />} />
      <Route path="skills" element={<Skills />} />
      <Route path="achievements" element={<Achievements />} />
    </Routes>
  </BrowserRouter>
);

export default App;
