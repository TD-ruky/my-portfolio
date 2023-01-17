import './app.css'

import algorithm from './medias/algorithm.png'
import ladybug from './medias/ladybug.png'
import design from './medias/design.png'
import Content from './content/content.json'
import Skill from './components/skills/Skill.js'
import Project from './components/projects/Project.js'
import Header from './components/header/Header.js'
import Main from './components/main/Main.js'
import Canvas from './components/secret-component/Canvas.js'
import {useRef} from 'react'
function App() {

	const skillsRef = useRef(null);
	const projectsRef = useRef(null);
	const handleClick = (ref) => {
		ref.current.scrollIntoView({behavior: 'smooth'});
		console.log(skillsRef.current.offsetTop)
	  }

	return (
		
		<div className="app">
			<Header handleClick={handleClick} skillsRef={skillsRef} projectsRef={projectsRef} />
			<Main/>
			<h3 className='project-section-title' ref={skillsRef}>Compétences</h3>
			<p id='skill-paragraph'>En plus des outils que j'utilise et que vous pouvez retrouver sur mon <a href="https://github.com/TD-ruky">github</a>, voici quelques informations me concernant :</p>
			<section className='skills-grid'>
				<Skill cardTitle={Content.skill[0].title} cardContent={Content.skill[0].content} icone={algorithm} />
				<Skill cardTitle={Content.skill[1].title} cardContent={Content.skill[1].content} icone={design} />
				<Skill cardTitle={Content.skill[2].title} cardContent={Content.skill[2].content} icone={ladybug} />
			</section>
			<section>
				<h3 className='project-section-title' ref={projectsRef}>Projets</h3>
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
