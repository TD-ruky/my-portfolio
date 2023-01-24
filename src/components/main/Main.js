import React from 'react'
import './main.css'

import avatar from '../../medias/moi.png'
import linkedin from '../../medias/linkedin.svg'
import github from '../../medias/github.svg'
export default function Main() {
    return (
        <main>
            <div id='first-impression'>
                <div className='container-h1'>
                    <h1>Derivaux Thomas</h1>
                </div>
                <h2>Developpeur Front-End</h2>
                <p>Développeur principalement React, j'aime implémenter des designs innovants, découvrir de nouveaux outils,
                    et surtout travailler en équipe. Vous pouvez me retrouver ici :
                </p>
                <ul id='link-other-website'>
                    <li><a href="https://www.linkedin.com/in/thomas-derivaux-02363b206"><img src={linkedin} alt='logo de Linkedin redirigeant vers le compte de Thomas Derivaux'/></a></li>
                    <li><a href="https://github.com/TD-ruky"><img src={github} alt='logo de github redirigeant vers le compte de TD-ruky' /></a></li>
                </ul>
                <div>
                    <img className='avatar' src={avatar} alt='Thomas Derivaux'></img>
                </div>
            </div>
        </main>
    )
}
