import React from "react";
import s from "./Profile.module.css";

const Content = () => {
    return <div className={s.content}>
                <div>
                    <img src="https://static.addtoany.com/images/dracaena-cinnabari.jpg" alt=""/>
                </div>
                <div className={s.ava}>
                    <img src="http://www.nasa.gov/sites/default/files/thumbnails/image/plasmatourhr_orbit1.0090.jpg"
                         alt="ava + descriptions"/>
                         MY AVATAR
                </div>
                <div>posts
                    <div>NEW POST</div>
                    <div className={s.post}>post 1</div>
                    <div className={s.post}>post 1</div>
                </div>
            </div>
};

export default Content;