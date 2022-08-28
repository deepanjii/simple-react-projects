import { Link } from 'react-router-dom';

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  isExternal?: boolean;
  url: string;
}

const ProjectLink = ({ children, isExternal, url }: Props): JSX.Element => (
  isExternal ? (
    <a className='project-link' rel='noreferrer' target='_blank' href={url}>{children}</a>
  ) : (
    <Link className='project-link' to={url}>
      {children}
    </Link>
  )
);

ProjectLink.defaultProps = {
  isExternal: false
};

export default ProjectLink;
