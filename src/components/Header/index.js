import logo from "../../images/logo.svg";

export default function Header(props) {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo ping" />
        </div>
        <h1 className="title">
          We are launching <span className="title__mark">soon!</span>
        </h1>
        <h2 className="subtitle">Subscribe and get notified</h2>
      </header>
    );
}