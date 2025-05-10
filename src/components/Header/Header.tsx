import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<header>
			<img className="logo-spa" src="src/assets/img/spa.png" alt="logo spa" />

			<nav className="header-nav">
				<Link to="/adoption">Adoption</Link>
				<Link to="/animal">Nos animaux</Link>
				<Link to="/report">Alertez-nous</Link>
			</nav>
		</header>
	);
}

export default Header;
