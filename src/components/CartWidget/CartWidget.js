import cart from "./assets/cart-png.png";
import 'bulma/css/bulma.min.css';
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div className="image is-32x32 cart">
            <Link to="../Cart/Cart">
                <img src={cart} alt="cart-widget"/>
            </Link>
        </div>
    )
}

export default CartWidget