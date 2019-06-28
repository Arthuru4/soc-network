import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return <header className={s.header}>
        <img src="https://www.nacc.com.au/wp-content/uploads/2017/04/img-logo-wwf-panda-transparent-201x300.png"
             alt=""/>
    </header>
};

export default Header;