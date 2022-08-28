import _ from 'lodash';
import type { ProjectType } from './types';
import ProjectLink from './ProjectLink';

interface Props {
  project: ProjectType;
}

const Project = ({ project }: Props): JSX.Element => (
  <div className='project'>
    <div className="project-card">
      <div className="project-card__front">
        <img className='project__img' src={project?.srcImg} alt={project?.srcImgAlt} width='100px' height='auto' />
        <h3 className='project__title'>{project?.title}</h3>
      </div>
      <div className="project-card__back">
        <div className='tech-stack'>
          <h3 className='tech-stack__heading'>Tech Stack</h3>
          <div className="tech-stack__items">
            {
              _.map(project.techStack, (value, key) => (
                <span className={`badge badge--${key}`} key={key}>{value}</span>
              ))
            }
          </div>
        </div>
        <ProjectLink url={project?.url} isExternal={project?.externalLink}>
          View Demo
        </ProjectLink>
      </div>
    </div>
  </div>
);

export default Project;
