import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"


const ItemDetail = ({ id, name, img, category, quantity, price}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const item = {
            id, 
            name, 
            price,
        };

        addItem(item, quantity);
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section className="InfoSection">
                <p className="Category">
                    Categoria : {category}
                </p>
                <p className="Quantity">
                    Cantidad: {quantityAdded > 0 ? quantityAdded : quantity}
                </p>
                <p className="Price">
                    Precio: {typeof price === 'number' ? `${price}` : 'Precio no disponible'}
                </p>
            </section>
            <footer className="ItemFooter">
                {quantityAdded > 0 ? (
                        <Link to="/cart"  className="OptionFooter">Finalizar compra</Link>
                    ):(
                        <ItemCount initial={1} stock={quantity} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    );
};

export default ItemDetail;