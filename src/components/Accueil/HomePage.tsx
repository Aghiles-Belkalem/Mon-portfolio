import { useLanguage } from "../../TaductionContext/LanguagesContext";
import "../Header/Header.css";
import "../Footer/Footer.css";
import "../Accueil/HomePage.css";
import "../Css-composent-pages/CssGlobal.css";

const HomePage = () => {
	const { t } = useLanguage();

	return (
		<>
			<main>
				<section className="home-page">
					<h1 className="homepage-title">{t.title}</h1>{" "}
					<article className="workSkills">
						<img src="public/assets/icones/api.png" alt="" className="devskills" />
						<img
							src="assets/icones/atomic.png"
							alt=""
							className="devskills"
						/>
						<img
							src="assets/icones/css-3.png"
							alt=""
							className="devskills"
						/>
						<img
							src="assets/icones/github (2).png"
							alt=""
							className="devskills"
						/>
						<img
							src="assets/icones/html-5 (1).png"
							alt=""
							className="devskills"
						/>
						<img
							src="assets/icones/nodejs.png"
							alt=""
							className="devskills"
						/>
					</article>
					<article className="home-pageArticle">
						<p className="homepage-intro">{t["homepage-intro"]}</p>
						<img
							src="assets/User-pic/Wilders-189-removebg-preview.png"
							alt="moi"
							className="user-pic"
						/>
					</article>
					<article>
						<div className="skills-container">
							<div className="skill-item">
								<img
									src="assets/icones/teamwork.png"
									alt={t["skill-teamwork"]}
									className="skills"
								/>
								<p className="icone-legend">{t["skill-teamwork"]}</p>
							</div>
							<div className="skill-item">
								<img
									src="assets/icones/reward.png"
									alt={t["skill-motivation"]}
									className="skills"
								/>
								<p className="icone-legend">{t["skill-motivation"]}</p>
							</div>
							<div className="skill-item">
								<img
									src="assets/icones/motivation.png"
									alt={t["skill-passion"]}
									className="skills"
								/>
								<p className="icone-legend">{t["skill-passion"]}</p>
							</div>
						</div>
					</article>
				</section>
			</main>
		</>
	);
};

export default HomePage;
