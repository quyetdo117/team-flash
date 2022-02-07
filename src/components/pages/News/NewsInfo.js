import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrum from '../../Breadcrum';
import './NewsInfo.css'

function NewsInfo({dataItem}) {
    const {src, title, content} = dataItem
    return (
    <>
        <div className='news__info'>
            <Breadcrum><Link to='/news'>Tin tức</Link>
            </Breadcrum>
            <div className='news__info-container'>
                <div className='grid'>
                    <div className='row'>
                        <div className='col b-12'>
                            <div className='news__info-img'>
                                <img src={src} alt='img'></img>
                            </div>
                            <div className='news__info-content'>
                                <h2>{title}</h2>
                                {
                                    content && content.map((item, index) => (
                                        <div key={index}>{item}</div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default NewsInfo;
