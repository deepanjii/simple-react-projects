/* @flow */
import React from 'react';
import type { Node } from 'react';
import type { ProjectType } from './types';
import ProjectLink from './ProjectLink';

type Props = {
  project: ProjectType
};

const Project = ({ project }: Props): Node => (
  <ProjectLink url={project.url} isExternal={project.externalLink}>
    <div className='project'>
      <img className='project__img' src={project.srcImg} alt={project.srcImgAlt} width='100px' height='auto' />
      <h3 className='project__title'>{project.title}</h3>
    </div>
  </ProjectLink>
);

export default Project;
