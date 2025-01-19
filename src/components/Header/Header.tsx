import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../ThemeContext/ThemeContext";
import { useLanguage } from "../../TaductionContext/LanguagesContext";

export default function Header() {
	const [menueIsOpen, setMenueIsOpen] = useState(false);
	const { lang, setLang, t } = useLanguage();

	const menuRef = useRef<HTMLDivElement | null>(null);
	const toggleMenue = () => {
		setMenueIsOpen(!menueIsOpen);
	};

	const toggleLanguage = () => {
		setLang(lang === "fr" ? "en" : "fr");
	};
	
	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setMenueIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<header>
			<div className="menue-container">
				<nav ref={menuRef}>
					<img
						src="src/assets/icones/list.png"
						alt="liste"
						className={`burger-menu ${menueIsOpen ? "open" : ""}`}
						onClick={toggleMenue}
					/>
					<ul className={`nav-list ${menueIsOpen ? "open" : ""}`}>
						<li>
							<ThemeToggle  />
						</li>
						<li>
							<Link to="/" className="nav-link">
								{t.Accueil}
							</Link>
						</li>
						<li>
							<Link to="/Mon Parcours" className="nav-link">
								{t["Mon parcours"]}{" "}
							</Link>
						</li>
						<li>
							<Link to="/Mes Diplomes" className="nav-link">
								{t["Mes diplômes"]}
							</Link>
						</li>
						<li>
							<Link to="/Mes Projets" className="nav-link">
								{t["Mes projets"]}
							</Link>
						</li>
						<li>
							<button
								type="button"
								onClick={toggleLanguage}
								className="language-button"
							>
								{lang === "fr" ? (
									<img
										src="src/assets/icones/france_flag.png"
										alt="France"
										className="flag-icon"
									/>
								) : (
									<img
										src="src/assets/icones/uk_flag.png"
										alt="Usa"
										className="flag-icon"
									/>
								)}
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
