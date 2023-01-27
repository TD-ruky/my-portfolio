import React, { useEffect, useState } from 'react'
import './header.css'
import logo from '../../medias/logo.png'


export default function Header(props) {
    const [checkWidth, setCheckWidth] = useState(window.innerWidth)
    const [toggleNav, setToggleNav] = useState(false)

    const toggleNavFunc = () => {
        setToggleNav(!toggleNav)
    }
    const checkFunc = () =>{
        setCheckWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize', checkFunc)

        //if component is unmount
        return () => {
            window.removeEventListener('resize', checkFunc)
        }
    },[])

    return (
        <header id="header-nav">
            <nav>
                <img id='logo' alt='logo du portfolio de TD-ruky' src={logo} onClick={() => props.scrollPage(props.startRef)}></img>
                {checkWidth>700?
                    <ul id='site-nav'>
                        <li onClick={() => props.scrollPage(props.skillsRef)}>Compétences</li>
                        <li onClick={() => props.scrollPage(props.projectsRef)}>Projets</li>
                    </ul>
                    
                    :
                    <button onClick={toggleNavFunc} className="burger-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                    </button>
                }
            </nav>
            {
                toggleNav? 
                <ul className='responsive-nav'>
                    <li onClick={() => props.scrollPage(props.skillsRef)}>Compétences</li>
                    <li onClick={() => props.scrollPage(props.projectsRef)}>Projets</li>
                </ul>:
                null
            }
            <div></div>
        </header>
    )
}
