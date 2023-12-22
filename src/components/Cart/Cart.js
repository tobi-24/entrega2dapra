import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {
    const { cart, clearCart, totalPrice} = useContext(CartContext)

    if(cart.length === 0) {
        return(
            <div className="NoProducts">
                <h1 className="TitleCart">No hay productos en el carrito</h1>
                <Link to="/" className="GoToProducts">Productos</Link>
            </div>
        )
    }

    return(
        <div className="Cart">
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3 className="CartPrice">Total:$ {totalPrice()}</h3>
            <button onClick={() => clearCart()} className="CartButton">Limpiar carrito</button>
            <Link to="/checkout" className="Checkout">Checkout</Link>
        </div>
    )
}
export default Cart;