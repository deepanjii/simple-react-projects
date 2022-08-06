import React from 'react';
import Link from '@mui/material/Link';
import DashboardLayout from '../Dashboard';

const Projects = () => (
  <DashboardLayout>
    <div>Projects</div>
    <Link href='/todo'>Todo App</Link>
  </DashboardLayout>
);

export default Projects;
