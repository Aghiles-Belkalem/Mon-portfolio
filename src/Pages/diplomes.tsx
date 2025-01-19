import { useLanguage } from "../TaductionContext/LanguagesContext";
import "../components/Css-composent-pages/Parcours.css";
import "../components/Css-composent-pages/diplomes.css";

export default function MesDiplomes() {
	const { t } = useLanguage();

	type Diplome = {
		titre: string;
		annee: number;
		mention?: string;
		etablissement: string;
	};

	type Langue = {
		nom: string;
		niveau: string;
	};

	const diplomes: Diplome[] = [
		{
			titre: t["Diplôme Développeur Web Full Stack"],
			annee: 2024,
			etablissement: t["Wild Code School"],
		},
		{
			titre: t["Diplôme Coach Sportif IFBB PRO"],
			annee: 2016,
			etablissement: t.IFBB,
		},
		{
			titre: t["Licence en Histoire"],
			annee: 2015,
			etablissement: t["Université d'Alger"],
		},
		{
			titre: t["Baccalauréat Littérature et Langues Étrangères"],
			annee: 2010,
			mention: t["Mention Bien"],
			etablissement: t.Lycée,
		},
	];

	const langues: Langue[] = [
		{ nom: t.Kabyle, niveau: t.Natif },
		{ nom: t.Anglais, niveau: t.Courant },
		{ nom: t.Français, niveau: t.Courant },
		{ nom: t.Arabe, niveau: t.Courant },
		{ nom: t.Espagnol, niveau: t.Notions },
	];

	return (
		<div className="diplomes-et-langues">
			<section className="diplomes">
				<h2>{t["Mes diplômes"]}</h2>
				<ul className="diplomeListe">
					{diplomes.map((diplome, index) => (
						<li key={index}>
							<strong>{diplome.titre}</strong> ({diplome.annee}) <br />
							{diplome.mention && <em> - {diplome.mention}</em>} <br />
							<span>{diplome.etablissement}</span>
						</li>
					))}
				</ul>
			</section>

			<section className="langues">
				<h2>{t["Langues parlées"]}</h2>
				<ul className="diplomeListe">
					{langues.map((langue, index) => (
						<li key={index}>
							<strong>{langue.nom}:</strong> {langue.niveau}
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
