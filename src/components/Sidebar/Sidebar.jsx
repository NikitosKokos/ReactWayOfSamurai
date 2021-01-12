import s from './Sidebar.module.css';
import {
  NavLink
} from "react-router-dom";
import Friends from './Friends/Friends';
import {changeStateMenuActionCreator} from '../../redux/header-reducer';

const Sidebar = (props) => {
    let asideClasses = s.aside;
    if (props.state.active) {
      asideClasses += ` ${s.active}`;
    }

    const closeMenu = () => {
      props.dispatch(changeStateMenuActionCreator(false));
    }
    return(
        <aside className={asideClasses}>
          <ul className={s.list}>
            <li><NavLink to="/profile" onClick={closeMenu} className={s.link} activeClassName={s.active}>Profile</NavLink></li>
            <li><NavLink to="/messages" onClick={closeMenu} className={s.link}  activeClassName={s.active}>Messages</NavLink></li>
            <li><NavLink to="/news" onClick={closeMenu} className={s.link}  activeClassName={s.active}>News</NavLink></li>
            <li><NavLink to="/music" onClick={closeMenu} className={s.link}  activeClassName={s.active}>Music</NavLink></li>
            <li><NavLink to="/settings" onClick={closeMenu} className={`${s.link} ${s.linkSet}`}  activeClassName={s.active}>Settings</NavLink></li>
          </ul>
          <Friends friends={props.state.friends} />
      </aside>
    );
}

export default Sidebar;