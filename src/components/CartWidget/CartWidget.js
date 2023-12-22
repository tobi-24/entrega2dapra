import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaCartShopping } from "react-icons/fa6";
import "./CartWidget.css"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    
    return (
        <Link to="/cart" className="CartWidget">
            <FaCartShopping className="CartIcon" />
            {totalQuantity()}
        </Link>
    )
}


export default CartWidget