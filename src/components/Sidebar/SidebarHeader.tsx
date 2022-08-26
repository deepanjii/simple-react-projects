import { memo } from 'react';
import ProfilePic from '../../assets/images/profile_pic.jpg';

const SidebarHeader = memo((): JSX.Element => (
  <div className="sidebar__header">
    <img className='sidebar__header__image' src={ProfilePic} alt='deepan profile pic' />
    <div className="sidebar__header__text">
      <h3 className='sidebar__header__title'>Deepan A</h3>
      <h4 className='sidebar__header__subtitle'>Web Developer</h4>
    </div>
  </div>
));

export default SidebarHeader;
