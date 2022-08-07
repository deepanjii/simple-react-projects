import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../Dashboard';

const Projects = () => (
  <DashboardLayout>
    <div>Projects Page</div>
    <Link to='/todo'>Todo App</Link>
  </DashboardLayout>
);

export default Projects;
