import image from "../assets/investment-calculator-logo.png";

export default function Header(){
    return (
        <header id="header">
            <img src={image} alt="money bag" />
            <h1>Investiment Calculator</h1>
        </header>
    );
}