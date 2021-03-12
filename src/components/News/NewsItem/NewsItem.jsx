import s from './NewsItem.module.css';
import React from 'react';
import defaultImg from '../../../assets/img/newsImage.jpg';

const NewsItem = ({urlToImage,title,author,url,description}) => {
    return(
        <a href={url} target='_blank' className={s.item}>
            <div className={s.img}>
                <img src={urlToImage || defaultImg} alt="img"/>
            </div>
            <div className={s.text}>
                <h2 className={s.title}>{title}</h2>
                <p className={s.description}>{description}</p>
                <div className={s.author}>
                    {author}
                </div>    
            </div>
            
        </a>
    );
}

export default NewsItem;