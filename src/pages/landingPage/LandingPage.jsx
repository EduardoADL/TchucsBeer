import React from 'react';

import ImageText from '../../components/imageText/ImageText';

import logo from '../../assets/imgs/logo.png';

import './LandingPage.css';

const LandingPage = () =>{
    return(
        <div className="landing-page">
            <div className="menu">
                <div className="opcoes">
                    <a className="textoption" href="">Bebidas</a>
                    <a className="textoption" href="">Narguile</a>
                    <a className="textoption" href="">Contato</a>
                </div>
                <div className="logo">
                    <img src={logo}/>
                    <a className="name">Tchuc's Beer</a>
                </div>
            </div>
            <div>
                <ImageText />
            </div>
        </div>
    )
}
export default LandingPage;