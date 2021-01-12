import s from './Header.module.css';
import {changeStateMenuActionCreator} from '../../redux/header-reducer';

const Header = (props) => {
  
  const showMenu = () => {
    props.dispatch(changeStateMenuActionCreator(!props.burgerActive));
  }

  let burgerClasses = s.burger;
  if (props.burgerActive) {
    burgerClasses += ` ${s.active}`;
  }
    return(
        <header className={s.header} >
          <div className={s.logo}>
            Matrix
          </div>
          <div className={burgerClasses} onClick={showMenu} >
            <span></span>
          </div>
      </header>
    );
}

export default Header;