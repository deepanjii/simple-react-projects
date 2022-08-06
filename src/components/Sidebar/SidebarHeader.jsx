import React from 'react';

const SidebarHeader = React.memo(() => (
  <div className="sidebar__header">
    <img className='sidebar__header__image' src='images/profile_pic.jpg' alt='deepan profile pic' />
    <h3 className='sidebar__header__title'>Deepan A</h3>
  </div>
));

export default SidebarHeader;
