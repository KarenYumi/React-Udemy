import { UserProgressContextProvider } from "./store/UserProgressCOntext.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";


function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header></Header>
        <Meals />
        <Cart></Cart>
        <Checkout></Checkout>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
