import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: JSX.Element | JSX.Element[];
  isExternal?: boolean;
  url: string;
}

const ProjectLink = ({ children, isExternal, url }: Props): JSX.Element => (
  isExternal ? (
    <a className='project-card' rel='noreferrer' target='_blank' href={url}>{children}</a>
  ) : (
    <Link className='project-card' to={url}>
      {children}
    </Link>
  )
);

ProjectLink.defaultProps = {
  isExternal: false
};

export default ProjectLink;
