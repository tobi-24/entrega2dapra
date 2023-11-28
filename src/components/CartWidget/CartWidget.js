import cart from "./assets/cart-png.png";
import 'bulma/css/bulma.min.css';
import quanity from "../ItemDetail/ItemDetail";

const CartWidget = () => {
    return (
        <div className="image is-32x32 cart">
            {quanity}
            <img src={cart} alt="cart-widget"/>
        </div>
    )
}

export default CartWidget