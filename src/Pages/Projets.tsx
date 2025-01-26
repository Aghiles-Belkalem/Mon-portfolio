import "../components/Css-composent-pages/Projets.css";
import PopCornBoxDemo from "../components/videos/PopCornBoxDemo";
import FloppyClickerDemo from "../components/videos/FloppyClikerDemo";

export default function MesProjets() {
	return (
		<>
			<section>
				<h4 className="projets-titles">Pop-Corn Box</h4>
				<PopCornBoxDemo />
			</section>
			<section>
				<h4 className="projets-titles">Floppy Clicker</h4>
				<FloppyClickerDemo />
			</section>
		</>
	);
}
