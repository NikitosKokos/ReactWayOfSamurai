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
            LFJ
          </NavLink>
          <div className={s.info} >
            <div className={s.loginWrap}>
              { props.isAuth 
              ? <div className={s.profile}> 
                <div className={s.name}>{props.login}</div>
                <button onClick={props.logout} className="btnLight"><span>Log out</span></button>
              </div>
              : <NavLink to='/login' className='btnLight' >
                  <span>login</span>
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