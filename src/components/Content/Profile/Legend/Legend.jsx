import React from 'react';
import s from './Legend.module.css';

const Legend = (props) => {

    let contacts = () => {
        if (!props.profile.contacts) return;

        const hrefComponent = el => {
            if (!el.url) return;
            return (
                <div key={el.key}>
                    <a href={el.url}>{el.name}</a>
                </div>
            )
        };
        return Object.keys(props.profile.contacts).map((el, i) => {
            return hrefComponent({name: el, url: props.profile.contacts[el], key: i})
        })
    };

    return (
        <div className={s.wrap}>
            <div><img src="https://static.schools.by/images/header-bg/img-35.jpg" alt=""/></div>
            <div className={s.content}>
                <div className={s.ava}>
                    <img src={props.profile.photos && props.profile.photos.large ||
                    'http://www.nasa.gov/sites/default/files/thumbnails/image/plasmatourhr_orbit1.0090.jpg'}
                         alt="ava + descriptions"/>
                </div>
                <div className={s.info}>
                    <div className={s.title}> {props.profile.fullName || `fullName`}</div>
                    <div className={s.aboutMe}>{props.profile.aboutMe || `aboutMe`}</div>
                    <div className={s.job}>
                        <div className={s.title}>
                            <span>{`looking for a Job: ${props.profile.lookingForAJob || 'dont know'}`}</span>
                        </div>
                        <div className={s.aboutMe}> {props.profile.lookingForAJobDescription || `aboutMe`}</div>
                    </div>
                    <div className={`${s.title} ${s.contactsWrapp}`}>
                        <div>CONTACTS:</div>
                        <div className={s.aboutMe}>
                            {contacts()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Legend;