import { useState } from "react";
import ReactPlayer from "react-player";
import "../../components/Css-composent-pages/Projets.css";
import { useLanguage } from "../../TaductionContext/LanguagesContext";

export default function PopCornBoxDemo() {
	const { t } = useLanguage();
	const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

	const toggleDescription = () => {
		setIsDescriptionVisible(!isDescriptionVisible);
	};

	return (
		<>
			<div className="video-container">
				<ReactPlayer
					url="https://www.youtube.com/watch?v=j2Qr8RU-XaU"
					controls
					width="100%"
					height="100%"
				/>
			</div>
			<button
				type="button"
				className="description-button"
				onClick={toggleDescription}
			>
				{isDescriptionVisible ? t.descriptionNone : t.description}
			</button>
			{isDescriptionVisible && (
				<div className="description">
					<p>{t["popcorn.description"]}</p>
				</div>
			)}
		</>
	);
}
