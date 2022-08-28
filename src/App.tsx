import { Achievements, Home, Projects, Skills, Todo } from './components';
import { Route, Routes } from 'react-router-dom';
import './css/style.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="todo" element={<Todo />} />
    <Route path="projects" element={<Projects />} />
    <Route path="skills" element={<Skills />} />
    <Route path="achievements" element={<Achievements />} />
  </Routes>
);

export default App;
