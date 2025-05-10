import { Link } from "react-router-dom";
import "./AdoptionPage.css";

function AdoptionPage() {
	return (
		<>
			<figure className="main-adopte">
				<h1 className="adopte-title-h1">
					L'adoption responsable change autant la vie de l'animal que la vôtre
				</h1>
				<h2 className="adopte-title-h2">
					Attention, préalablement à l'adoption d'un animal, vous devez signer
					un contrat
				</h2>
			</figure>
			<button type="button">
				<Link to="/animal">Adoptez-nous</Link>
			</button>
		</>
	);
}

export default AdoptionPage;
