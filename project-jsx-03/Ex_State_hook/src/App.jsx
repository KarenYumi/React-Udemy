import React from 'react';

export default function App() {
    const [getPrice, setPrice] = React.useState("$100");
    function handleSetDiscount(){
        setPrice("$75");
    }
    return (
        <div>
            <p data-testid="price">{getPrice}</p> 
            <button onClick={handleSetDiscount}>Apply Discount</button>
        </div>
    );
}

//primeiro ele pega com getPrice o valor 100
// e ao clicar no botão ele redireciona para a função handleSetDiscount
// que salva o valor 75 com setPrice
// e depois ele pega o valor salvo com o getPrice