import "./Card.css";

interface CardProps {
	image: string;
}

function Card({ image }: CardProps) {
	return (
		<figure className="figure-card">
			<img src={image} alt="chien" />
		</figure>
	);
}

export default Card;
