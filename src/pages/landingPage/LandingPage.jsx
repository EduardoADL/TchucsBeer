import React from 'react';

import ImageText from '../../components/imageText/ImageText';
import { marcas } from '../../assets/data/marcas.js'

import logo from '../../assets/imgs/logo.png';
import whatsapp from '../../assets/imgs/social/whats.png';
import instagram from '../../assets/imgs/social/instagram.png';
import background from '../../assets/imgs/background.jpg';
import beer from '../../assets/imgs/beer.jpg';
import girl from '../../assets/imgs/girl.jpg';
import './LandingPage.css';


import bebidas from "../../assets/data/bebidas.json"
import energeticos from "../../assets/data/energeticos.json"
import narguile from "../../assets/data/narguile.json"
import carvao from "../../assets/data/carvao.json"


const LandingPage = () => {

    return (
        <div id="home" className="landing-page">
            <nav class=" menu navbar navbar-expand-lg bg-black">
                <div class="container-fluid">
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse menuOptions" id="navbarNav">
                        <ul class="navbar-nav optionsMenu">
                            <li class="nav-item">
                                <a class="nav-link color" aria-current="page" href="#bebidas">Bebidas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link color" href="#narguile">Narguilé</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link color" href="#contato">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img className="homer" src={logo} alt="logo"></img>
                        <a class="navbar-brand colorTitle" href="#home">Thuc's Beer</a>
                    </div>
                </div>
            </nav>
            <div>
                <img className="principalimage" src={background} alt="background" />
            </div>
            <div id='bebidas' className="background">
                <img className="imagemCenter" src={beer} alt="beer" />
                <ImageText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean et tortor at risus." 
                title="Bebidas" 
                firstOption={bebidas}
                secondOption={energeticos}
                subtitle1="Destilado" 
                subtitle2="Combo" />
            </div>
            <div className="background">
                <ImageText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean et tortor at risus." 
                title="Bebidas"
                firstOption={narguile}
                secondOption={carvao}
                subtitle1="Essência" 
                subtitle2="Carvão" />
                <img className="imagemCenter" src={girl} alt="girl" />
            </div>
            <div className="gallery-wrapper">
                <div className="gallery">
                    {marcas.map((a) => (
                        <img key={a.key} src={a.container} className="item current-item" />
                    ))
                    }
                </div>
            </div>
            <div id="contato" className="footer">
                <div className="section_map">
                    <p className="text_footer">LOCALIZAÇÃO</p>
                    <p className="subtitle_map">Avenida República Argentina, 7455</p>
                    <section className="mapLocalization">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0621731724004!2d-54.51412568443811!3d-25.536305843354935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f696c51d91f9fd%3A0x29622ec5136b0c1d!2sAv.%20Rep%C3%BAblica%20Argentina%2C%207455%20-%20Foz%20do%20Igua%C3%A7u%2C%20PR!5e0!3m2!1sen!2sbr!4v1663614478818!5m2!1sen!2sbr"
                            className="map"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            title="mapa" />
                    </section>
                </div>
                <div>
                    <img className="logo_footer" src={logo} alt="logo"></img>
                </div>
                <div>
                    <p className="text_footer">Contatos</p>
                    <a href="https://api.whatsapp.com/send?phone=5545999665394&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20dos%20produtos!" target="_blank">
                        <div className="social_one">
                            <img className="social_footer" src={whatsapp} alt="whatsapp"></img>
                            <a className="text_footer">(45) 99966 - 5394</a>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/thucsbeeer_/" target="_blank">
                        <div className="social_two">
                            <img className="social_footer" src={instagram} alt="instagram"></img>
                            <a className="text_footer">@thucsbeeer_</a>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;