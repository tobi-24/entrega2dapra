import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../services/firebase/firebase';
import "bulma/css/bulma.css";
import "./Checkout.css"

const Checkout = () => {

    
    const [orderId, setOrderId] = useState("");

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: totalPrice()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setOrderId(doc.id);
                clearCart();
            })
    }

    if (orderId) {
        return (
            <div className="Container">
                <h1 className="Title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {orderId}</p>
            </div>
        )
    }

  return (
    <div className="Container">
        <form className="Form" onSubmit={handleSubmit(comprar)}>
            <h1 className="Title">Finalizar compra</h1>
            <input className="input is-normal InputForm" type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input className="input is-normal InputForm" type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input className="input is-normal InputForm" type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
            <button className="SubmitButton" type="submit">Comprar</button>
        </form>
    </div>
  )
};

export default Checkout;