import preloader from '../../../assets/lg.discuss-ellipsis-preloader.gif';
import React from 'react';

let Preloader = (props) => {
    let inProgressHide = (style) => {
        return `${style} ${!props.inProgress ? 'hidden' : ''}`
    };

    return (
        <div className={inProgressHide('inProgress')}>
            <img src={preloader} alt="PRELOADER"/>
        </div>
    )
};

export default Preloader;