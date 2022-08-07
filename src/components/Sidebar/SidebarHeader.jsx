import React from 'react';
import ProfilePic from '../../assets/images/profile_pic.jpg';

const SidebarHeader = React.memo(() => (
  <div className="sidebar__header">
    <img className='sidebar__header__image' src={ProfilePic} alt='deepan profile pic' />
    <h3 className='sidebar__header__title'>Deepan A</h3>
  </div>
));

export default SidebarHeader;
