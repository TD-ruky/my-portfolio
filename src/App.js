import './app.css'



import { Skill, Project, Header, Main, Footer, CanvasPage, algorithm, ladybug, design, portfolioImg, tiktokPlays, fractaleImg, loginForm, Content} from './imports.js'
import { useRef, useState } from 'react'

function App() {
	//switch to fractal
	const [isCanvas, setIsCanvas] = useState(false)

	const startRef = useRef(null)
	const skillsRef = useRef(null);
	const projectsRef = useRef(null);

	const toggleHomeCanvas = () => {
		setIsCanvas(!isCanvas)
	}

	const scrollPage = (ref) => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		isCanvas ?
			<CanvasPage toggleHomeCanvas={toggleHomeCanvas} isCanvas={isCanvas} /> 
			:
			<div>
				<Header scrollPage={scrollPage} skillsRef={skillsRef} projectsRef={projectsRef} startRef={startRef} />
				<div className="main-page" ref={startRef}>
					<Main />
					<section >
						<h3 className='section-title' ref={skillsRef}>Compétences</h3>
						<p id='skill-paragraph'>En plus des outils que j'utilise et que vous pouvez retrouver sur mon <a href="https://github.com/TD-ruky">github</a>, voici quelques informations me concernant :</p>
						<div className='grid'>
							<Skill skill={Content.skills[0]} icon={algorithm} />
							<Skill skill={Content.skills[1]} icon={design} />
							<Skill skill={Content.skills[2]} icon={ladybug} />
						</div>

					</section>
					<section>
						<h3 className='section-title' ref={projectsRef}>Projets</h3>
						<div className='grid'>
							<Project project={Content.projects[0]} background={portfolioImg} />
							<Project project={Content.projects[1]} background={fractaleImg} toggleHomeCanvas={toggleHomeCanvas} fractale={true} />
							<Project project={Content.projects[2]} background={loginForm} fractale={false} />
							<Project project={Content.projects[3]} background={tiktokPlays} fractale={false} />
						</div>
					</section>
					<Footer/>
				</div>
			</div>
	);
}

export default App;
