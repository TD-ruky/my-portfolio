import './app.css'

import algorithm from './medias/algorithm.png'
import ladybug from './medias/ladybug.png'
import design from './medias/design.png'
import portfolioImg from './medias/projet-portfolio.PNG'
import fractaleImg from './medias/fractale.png'
import Content from './content/content.json'

import {Skill,Project,Header,Main,CanvasPage} from './components/call.js'
import {useRef, useState} from 'react'

function App() {
	const [isCanvas, setIsCanvas] = useState(false)

	const skillsRef = useRef(null);
	const projectsRef = useRef(null);

	const toggleHomeCanvas=()=>{
		setIsCanvas(!isCanvas)
	}

	const scrollPage = (ref) => {
		ref.current.scrollIntoView({behavior: 'smooth'});
	  }

	return (
		isCanvas?
		
		<CanvasPage toggleHomeCanvas={toggleHomeCanvas} isCanvas={isCanvas} />:
		<div className="app">
			<Header scrollPage={scrollPage} skillsRef={skillsRef} projectsRef={projectsRef} />
			<Main/>
			<h3 className='section-title' ref={skillsRef}>Compétences</h3>
			<p id='skill-paragraph'>En plus des outils que j'utilise et que vous pouvez retrouver sur mon <a href="https://github.com/TD-ruky">github</a>, voici quelques informations me concernant :</p>
			<section className='skills-grid'>
				<Skill skill={Content.skills[0]} icon={algorithm}/>
				<Skill skill={Content.skills[1]} icon={design}/>
				<Skill skill={Content.skills[2]} icon={ladybug}/>
			
			</section>
			<section>
				<h3 className='section-title' ref={projectsRef}>Projets</h3>
				<div className='projects-grid'>
					<Project project={Content.projects[0]} background={portfolioImg}/>
					<Project project={Content.projects[1]} background={fractaleImg} toggleHomeCanvas={toggleHomeCanvas} fractale={true} />
				</div>
			</section>
		</div>
	);
}

export default App;
