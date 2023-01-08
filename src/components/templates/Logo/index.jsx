import React from 'react';

//link router-dom
import { Link } from 'react-router-dom';

// import styles
import './logo.css';

// import logo image
import LogoImg from '../../../assets/logo.png';


const Logo = () => {
    return (
        <div className="Logo">
            <Link to="/"><img src={LogoImg} alt="Sneakers" className="LogoImg" /></Link>
            <div className="LogoInfo">
                <h3 className="LogoTitle">REACT SNEAKERS</h3>
                <p className="LogoSubtitle">Магазин лучших кроссовок</p>
            </div>
        </div>
    )
}

export default Logo