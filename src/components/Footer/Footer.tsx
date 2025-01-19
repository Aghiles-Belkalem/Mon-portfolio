export default function Footer() {
	return (
		<div className="footer-container">
			<ul className="footer-link">
				<li className="github-icone">
					<a
						href="https://github.com/Aghiles-Belkalem"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="icone-github"
							src="src/assets/icones/github (2).png"
							alt="Mon github"
						/>
					</a>
				</li>
				<li>
					<a href="https://wa.me/0615406661" target="_blank" rel="noreferrer">
						<img
							className="icone-whatsapp"
							src="src/assets/icones/whatsapp (2).png"
							alt="mon whatsapp"
						/>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/aghiles-belkalem-10871323b/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="src/assets/icones/business.png"
							alt="user linkedin"
							className="icone-linkedin"
						/>
					</a>
				</li>
			</ul>
		</div>
	);
}
