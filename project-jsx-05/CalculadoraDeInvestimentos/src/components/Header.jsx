import image from "../../public/investiment-calculator-logo.png"

export default function Header(){
    return (
        <header>
            <img src={image} alt="money bag" />
            <h1>Investiment Calculator</h1>
        </header>
    );
}