import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  
  const showMenu = () => {
    props.changeStateMenu(!props.burgerActive);
    props.changeStateBurg(!props.burgerActive);
  }

  let burgerClasses = s.burger;
  if (props.burgerActive) {
    burgerClasses += ` ${s.active}`;
  }
    return(
        <header className={s.header} >
          <NavLink to='/' className={s.logo}>
            Look For Job
          </NavLink>
          <div className={s.info} >
            <div className={s.loginWrap}>
              { props.isAuth ? 
              <div className={s.profile}> {props.login} </div>
               : <NavLink to='/login' className={s.login} >
                  login
              </NavLink>}
            </div>
            <div className={burgerClasses} onClick={showMenu} >
              <span></span>
            </div>
          </div>
      </header>
    );
}

export default Header;