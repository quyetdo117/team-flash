import React from 'react';
import { Link } from 'react-router-dom';
import './NewsItem.css'

function NewsItem({dataItem}) {
    const {src, title, id} = dataItem
    return (
    <>
        <div className='col b-3 m-4 s-6'>
            <div className='news__item'>
                <div className='news__item-img'>
                    <img alt='img' src={src}></img>
                </div>
                <Link to={id} className='news__item-name'>
                    <span>{title}</span>
                </Link>
            </div>
        </div>
    </>
    )
}

export default NewsItem;
