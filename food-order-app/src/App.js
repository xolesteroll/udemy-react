import {useState} from "react";
import Header from "./components/Layout/Header/Header";
import MainBanner from "./components/Layout/MainBanner/MainBanner";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartContext/CartProvider";

function App() {
    const [showCart, setShowCart] = useState(false)

    const showCartHandler = () => {
        setShowCart(true)
    }

    const hideCartHandler = () => {
        setShowCart(false)
    }

    return (
        <CartProvider>
            {showCart && <Cart showCart={showCartHandler} hideCart={hideCartHandler}/>}
            <Header showCart={showCartHandler}/>
            <main>
                <MainBanner/>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
