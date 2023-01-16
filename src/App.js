import './app.css'
import linkedin from './medias/linkedin.svg'
import github from './medias/github.svg'
import algorithm from './medias/algorithm.png'
import ladybug from './medias/ladybug.png'
import design from './medias/design.png'
import avatar from './medias/avatar.webp'
import logo from './medias/logo.png'
import Content from './content/content.json'
import Skill from './components/skills/Skill.js'
import Project from './components/projects/Project.js'
function App() {
	return (
		<div className="app">
			<header className="app-header">
				<nav id='header-nav'>
					<img src={logo}></img>
					<ul id='site-nav'>
						<li>lien1</li>
						<li>lien2</li>
						<li>lien3</li>
						<li>lien4</li>
					</ul>
				</nav>
				<div id='first-impression'>
					<h1>Derivaux Thomas</h1>
					<h2>Developpeur Front-End</h2>
					<p>Développeur principalement React, j'aime la création de designs innovants, découvrir de nouveaux outils,
						et surtout travailler en équipe. Vous pouvez me retrouver ici :
					</p>
					<ul id='link-other-website'>
						<li><img src={linkedin} /></li>
						<li><img src={github} /></li>
					</ul>
					<div>
						<img className='avatar' src={avatar}></img>
					</div>
				</div>
			</header>
			<section className='skills-grid'>
				<Skill cardTitle={Content.skill[0].title} cardContent={Content.skill[0].content} icone={algorithm} />
				<Skill cardTitle={Content.skill[1].title} cardContent={Content.skill[1].content} icone={design} />
				<Skill cardTitle={Content.skill[2].title} cardContent={Content.skill[2].content} icone={ladybug} />
			</section>
			<section>
				<h3 className='project-section-title'>Projets</h3>
				<div className='projects-grid'>
					<Project />
					<Project />
					<Project />
					<Project />
					<Project />
				</div>
			</section>
		</div>
	);
}

export default App;
