import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./AnimalPage.css";
import { Link } from "react-router-dom";

function AnimalPage() {
	const [arrayOfDogs, setArrayOfDogs] = useState([]);
	const [option, setOption] = useState("???");

	function handleChange(e: ChangeEvent<HTMLSelectElement>) {
		setOption(e.target.value);
	}

	console.log("Voici la mise à jour de l'option", option);

	useEffect(() => {
		if (option !== "???") {
			fetch(`https://dog.ceo/api/breed/${option}/images/random/50`)
				.then((response) => response.json())
				.then((data) => setArrayOfDogs(data.message));
		}
	}, [option]);

	return (
		<main className="main-animal">
			<select onChange={handleChange}>
				<option value="???">Veuillez choisir votre race de chien</option>
				<option>husky</option>
				<option>labrador</option>
				<option>hound</option>
				<option>doberman</option>
				<option>rottweiler</option>
			</select>
			{option !== "???" ? (
				arrayOfDogs.map((el) => {
					return <Card key={el} image={el} />;
				})
			) : (
				<img
					className="menu-img"
					src="https://cdn.pixabay.com/photo/2016/07/07/06/16/dogs-1501964_1280.jpg"
					alt="chiens repsésentation sous formes de bannière"
				/>
			)}
			<button type="button">
				<Link to="/news">Newsletter</Link>
			</button>
		</main>
	);
}

export default AnimalPage;
