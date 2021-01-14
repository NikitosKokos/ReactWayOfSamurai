import s from './Sidebar.module.css';
import {
  NavLink
} from "react-router-dom";
import Friends from './Friends/Friends';
import {changeStateMenuActionCreator} from '../../redux/sidebar-reducer';
import {changeStateBurgActionCreator} from '../../redux/header-reducer';
const Sidebar = (props) => {
    let asideClasses = s.aside;
    if (props.state.active) {
      asideClasses += ` ${s.active}`;
    }

    const closeMenu = () => {
      props.dispatch(changeStateMenuActionCreator(false));
      props.dispatch(changeStateBurgActionCreator(false));
    }
    return(
        <aside className={asideClasses}>
          <ul className={s.list}>
            <li><NavLink to="/profile" onClick={closeMenu} className={s.link} activeClassName={s.active}><span>Profile</span></NavLink></li>
            <li><NavLink to="/messages" onClick={closeMenu} className={s.link}  activeClassName={s.active}><span>Messages</span></NavLink></li>
            <li><NavLink to="/news" onClick={closeMenu} className={s.link}  activeClassName={s.active}><span>News</span></NavLink></li>
            <li><NavLink to="/music" onClick={closeMenu} className={s.link}  activeClassName={s.active}><span>Music</span></NavLink></li>
            <li><NavLink to="/settings" onClick={closeMenu} className={`${s.link} ${s.linkSet}`}  activeClassName={s.active}><span>Settings</span></NavLink></li>
          </ul>
          <Friends friends={props.state.friends} />
      </aside>
    );
}

export default Sidebar;