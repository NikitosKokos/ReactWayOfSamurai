import s from './Sidebar.module.css';
import {
  NavLink
} from "react-router-dom";
import FriendsContainer from './Friends/FriendsContainer';
const Sidebar = (props) => {
    let asideClasses = s.aside;
    if (props.active) {
      asideClasses += ` ${s.active}`;
    }

    const closeMenu = () => {
      props.changeStateMenu(false);
      props.changeStateBurg(false);
    }
    return(
        <aside className={asideClasses}>
          <ul className={s.list}>
            <li><NavLink to="/profile" onClick={closeMenu} className={s.link} activeClassName={s.active}><span>Profile</span></NavLink></li>
            <li><NavLink to="/messages" onClick={closeMenu} className={s.link}  activeClassName={s.active}><span>Messages</span></NavLink></li>
            <li><NavLink to="/news" onClick={closeMenu} className={s.link}  activeClassName={s.active}><span>News</span></NavLink></li>
            <li><NavLink to="/users" onClick={closeMenu} className={s.link}  activeClassName={s.active}><span>Users</span></NavLink></li>
            <li><NavLink to="/music" onClick={closeMenu} className={s.link}  activeClassName={s.active}><span>Music</span></NavLink></li>
            <li><NavLink to="/settings" onClick={closeMenu} className={`${s.link} ${s.linkSet}`}  activeClassName={s.active}><span>Settings</span></NavLink></li>
          </ul>
          <FriendsContainer />
      </aside>
    );
}

export default Sidebar;