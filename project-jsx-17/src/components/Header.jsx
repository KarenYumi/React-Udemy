import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

import { useContext } from "react";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0); // é o primeiro valor

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurante"/>
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}