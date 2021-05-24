import React from 'react'
import s from './Paginator.module.css';
import { NavLink } from 'react-router-dom';


const Paginator = ({ currentPage, pageSize, totalItemsCount, portionSize = 10, onPageChanged }) => {
    
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for(let i = 1; i <= pagesCount;i++){
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = React.useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.pagination}>
            { portionNumber > 1 &&
            <button className={s.page} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                    return <NavLink to={`/users/${p}`} onClick={() => {onPageChanged(p)}} className={`${s.page} ${currentPage === p && s.selectedPage}`} key={p} >{p}</NavLink>
            })}
            { portionCount > portionNumber &&
            <button className={s.page} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </div> 
    )
}

export default Paginator;