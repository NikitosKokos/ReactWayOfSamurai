import s from './DialogsItem.module.css';
import {
    NavLink
  } from "react-router-dom";

const DialogsItem = (props) => {
    const path = `/messages/${props.id}`;
    return <NavLink to={path} className={s.dialog} activeClassName={s.active}>{props.name}</NavLink>
}

export default DialogsItem;