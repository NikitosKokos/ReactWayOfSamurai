import s from './News.module.css';
import React from 'react';
import NewsItem from './NewsItem/NewsItem';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';

const News = ({news,totalResults,pageSize,page,onPageChanged,isFetching}) => {
    let pagesCount = Math.ceil(totalResults / pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount;i++){
        pages.push(i);
    }

    return(
        <div className={s.wrapper}>
            <h2 className={s.title}>News</h2>
            {isFetching 
            ? <div className={s.preloader}><Preloader/></div>
            : <div className={s.items}>
                {news.map((n => <NewsItem 
                    urlToImage={n.urlToImage} 
                    url={n.url}
                    author={n.author}
                    title={n.title}
                    description={n.description}
                    key={n.url}
                />))}
            </div>}
            <div className={s.pagination}>
                {pages.map(p => {
                       return <NavLink to={`/news/${p}`} onClick={() => onPageChanged(p)} className={`${s.page} ${page === p && s.selectedPage}`} key={p} >{p}</NavLink>
                })}
            </div>
        </div>
    );
}

export default News;