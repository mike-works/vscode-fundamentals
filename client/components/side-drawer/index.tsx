// @ts-check
import * as React from 'react';

import './styles.scss';

function SideDrawer({ drawerShowing, children, side}: {drawerShowing: boolean, children: any[], side: string}) {
  const topClasses = ['sidedrawer', 'mui--no-user-select', (side || 'left')];
  if (drawerShowing) {
    topClasses.push('active');
  }
  return (
    <div className={topClasses.join(' ')}>
      {children}
    </div>
  );
}
export default SideDrawer;
