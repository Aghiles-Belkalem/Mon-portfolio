import { useLanguage } from "../TaductionContext/LanguagesContext";
import "../components/Css-composent-pages/Parcours.css";
import "../App.css";

export default function MonParcour() {
	const { t } = useLanguage();

	return (
		<>
			<section>
				<h2 className="parcour-title">{t["Mon parcours professionnel"]}</h2>{" "}
				<p className="parcour-intro">{t["parcour-intro"]}</p>
			</section>

			<div>
				<section>
					<h3 className="parcour-title">{t["Mes Experiences"]}</h3>{" "}
				</section>
				<article>
					<div>
						<div className="experience-title">
							{t["2024 Developpeur Web Full Stack"]}{" "}
						</div>
						<img
							src="assets/icones/wild_code_school-removebg-preview.png"
							alt="wild code school"
							className="wild-code-school"
						/>
						<h3 className="experience-title">{t["Wild Code School"]}</h3>{" "}
						<ul className="experience">
							<li className="experience-details">
								{t["Conception et développement"]}
							</li>{" "}
							<li className="experience-details">
								{t["Mise en œuvre et gestion"]}
							</li>{" "}
							<li className="experience-details">
								{t["Développement d'API RESTful"]}
							</li>{" "}
							<li className="experience-details">
								{t["Application des bonnes pratiques"]}
							</li>{" "}
							<li className="experience-details">
								{t["Participation à des projets collaboratifs"]}
							</li>{" "}
						</ul>
					</div>
				</article>

				<article>
					<div>
						<div className="experience-title">
							{t["2020 - 2024 Responsable logistique"]}{" "}
						</div>
						<img
							src="assets/icones/trusk.png"
							alt="Trusk logistique"
							className="trusk"
						/>
						<h3 className="experience-title">{t["Trusk France"]}</h3>{" "}
						<ul className="experience">
							<li className="experience-details">{t["Gestion des stocks"]}</li>{" "}
							<li className="experience-details">
								{t["Planification des livraisons"]}
							</li>{" "}
							<li className="experience-details">
								{t["Optimisation des processus"]}
							</li>{" "}
							<li className="experience-details">
								{t["Coordination des équipes"]}
							</li>{" "}
							<li className="experience-details">
								{t["Suivi des performances"]}
							</li>{" "}
						</ul>
					</div>
				</article>

				<article>
					<div>
						<div className="experience-title">
							{t["2015 - 2019 Gérant de Bijouterie"]}{" "}
						</div>
						<img
							src="assets/icones/bijouterie_pénéloppe-removebg-preview.png"
							alt="bijouterie pénèlope"
							className="bijouterie-pénèlope"
						/>
						<h3 className="experience-title">{t["Bijouterie Pénèlope"]}</h3>{" "}
						<ul className="experience">
							<li className="experience-details">{t["Gestion des stocks"]}</li>{" "}
							<li className="experience-details">
								{t["Encadrement de l'équipe"]}
							</li>{" "}
							<li className="experience-details">{t["Contrôle financier"]}</li>{" "}
							<li className="experience-details">
								{t["Maintenance de l'image"]}
							</li>{" "}
							<li className="experience-details">
								{t["Gestion des ventes et des promotions"]}
							</li>{" "}
						</ul>
					</div>
				</article>
			</div>
		</>
	);
}
