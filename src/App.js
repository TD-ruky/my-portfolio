import './app.css'
import linkedin from './medias/linkedin.svg'
import github from './medias/github.svg'
function App() {
	return (
		<div className="app">
			<header className="app-header">
				<nav id='header-nav'>
					<a>TD-Ruky</a>
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
						avatar
					</div>
				</div>
			</header>
			<section>Compétences principales : </section>
			<section>Technologies vues</section>
			<section>Les projets</section>
		</div>
	);
}

export default App;
