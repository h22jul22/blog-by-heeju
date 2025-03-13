import SidebarIndex from '../sidebar/sidebar-index';
import SidebarIcons from '../sidebar/sidebar-icons';
import SidebarProfile from '../sidebar/sidebar-profile';
import SidebarImage from './sidebar-image';
import SidebarContainerAnimation from './sidebar-container-animation';

export default function SidebarContainer() {
  return (
    <>
      <SidebarImage />
      <SidebarContainerAnimation>
        <SidebarProfile />
        <SidebarIndex />
        <SidebarIcons />
      </SidebarContainerAnimation>
    </>
  );
}
