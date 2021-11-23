import {useState} from "react";
import Header from "./components/Layout/Header/Header";
import MainBanner from "./components/Layout/MainBanner/MainBanner";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
    const [showCart, setShowCart] = useState(false)

    const showCartHandler = () => {
        setShowCart(true)
    }

    const hideCartHandler = () => {
        setShowCart(false)
    }

    return (
        <>
            {showCart && <Cart showCart={showCartHandler} hideCart={hideCartHandler}/>}
            <Header showCart={showCartHandler}/>
            <main>
                <MainBanner/>
                <Meals/>
            </main>
        </>
    );
}

export default App;
