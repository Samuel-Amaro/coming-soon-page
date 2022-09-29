import imagen from "../images/illustration-dashboard.png";

export default function Figure(props) {
    return (
        <figure className="figure" aria-label="dashaboard ilustration">
            <img
             src={imagen}
             alt="dashboard ilustration"
             />
        </figure>
    );
}