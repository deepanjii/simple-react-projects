import React from 'react';
import DashboardLayout from '../Dashboard';
import Project from './Project';
import type { Projects as ProjectsType } from './types';
import TodoProjectImage from '../../assets/images/todo.jpg';
import NatoursProjectImage from '../../assets/images/natours.jpg';
import TrillioProjectImage from '../../assets/images/trillio.jpg';
import NexterProjectImage from '../../assets/images/nexter.jpg';

const projects: ProjectsType = [
  {
    url: '/todo',
    srcImg: TodoProjectImage,
    srcImgAlt: 'todo project image',
    title: 'Todo App'
  },
  {
    url: 'https://natours-tutorial.netlify.app/',
    srcImg: NatoursProjectImage,
    srcImgAlt: 'natours project image',
    title: 'Natours',
    externalLink: true
  },
  {
    url: 'https://trillo-tutorial.netlify.app/',
    srcImg: TrillioProjectImage,
    srcImgAlt: 'trillio project image',
    title: 'Trillio',
    externalLink: true
  },
  {
    url: 'https://nexter-tutorial.netlify.app/',
    srcImg: NexterProjectImage,
    srcImgAlt: 'nexter project image',
    title: 'Nexter',
    externalLink: true
  }
];

const Projects = () => (
  <DashboardLayout>
    <h2 className='page-header'>Projects</h2>
    <div className="projects">
      {
        projects.map(project => <Project key={project.title} project={project} />)
      }
    </div>
  </DashboardLayout>
);

export default Projects;
