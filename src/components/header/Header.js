import React from 'react'
import './header.css'
import logo from '../../medias/logo.png'


export default function Header(props) {


    return (
        <header id="header-nav">
            <nav>
                <img id='logo' src={logo}></img>
                <ul id='site-nav'>
                    <li onClick={() => props.handleClick(props.skillsRef)}>Compétences</li>
                    <li onClick={() => props.handleClick(props.projectsRef)}>Projets</li>
                </ul>
            </nav>
            <hr/>
        </header>
    )
}
