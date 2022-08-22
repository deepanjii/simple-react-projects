/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import type { Node } from 'react';

type Props = {
  children: Node,
  isExternal?: boolean,
  url: string
};

const ProjectLink = ({ children, isExternal, url }: Props): Node => (
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
