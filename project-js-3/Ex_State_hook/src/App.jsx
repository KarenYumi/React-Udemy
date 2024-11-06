import React from 'react';
export default function App() {
    const [price, setPrice] = React.useState("$100");
    function handleSetDiscount(){
        setPrice("$75");
    }
    return (
        <div>
            <p data-testid="price">{price}</p>
            <button onClick={handleSetDiscount}>Apply Discount</button>
        </div>
    );
}