import React from 'react';
import preloader from "../../../assets/images/Loading.svg";
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={preloader} alt={"preloader image"}/>
        </div>
    );
};

export default Preloader;