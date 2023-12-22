import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartItem.css"

const CartItem = ({ name, price, id, quantity }) => {

const { removeItem } = useContext(CartContext)

return (
    <div className="CartItem">
      <h2>{name}</h2>
      <p>Cantidad:{quantity}</p>
      <p>Subtotal:{price * quantity}</p>
      <button className="button is-danger is-small" onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  )
}

export default CartItem;