import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Legend from "./Legend/Legend";

const Profile = () => {
    return <div className={s.wrap}>
                <div>
                    <img src="https://static.schools.by/images/header-bg/img-35.jpg" alt=""/>
                </div>
                <div className={s.ava}>
                    <img src="http://www.nasa.gov/sites/default/files/thumbnails/image/plasmatourhr_orbit1.0090.jpg"
                         alt="ava + descriptions"/>
                         <Legend/>
                </div>
                <MyPosts />
            </div>
};

export default Profile;