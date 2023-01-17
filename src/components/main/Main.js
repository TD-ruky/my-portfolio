import React from 'react'
import './main.css'

import avatar from '../../medias/moi.png'
import linkedin from '../../medias/linkedin.svg'
import github from '../../medias/github.svg'
export default function Main() {
    return (
        <main>
            <div id='first-impression'>
                <h1>Derivaux Thomas</h1>
                <h2>Developpeur Front-End</h2>
                <p>Développeur principalement React, j'aime la création de designs innovants, découvrir de nouveaux outils,
                    et surtout travailler en équipe. Vous pouvez me retrouver ici :
                </p>
                <ul id='link-other-website'>
                    <li><a href="https://www.linkedin.com/in/thomas-derivaux-02363b206"><img src={linkedin} /></a></li>
                    <li><a href="https://github.com/TD-ruky"><img src={github} /></a></li>
                </ul>
                <div>
                    <img className='avatar' src={avatar}></img>
                </div>
            </div>
        </main>
    )
}
