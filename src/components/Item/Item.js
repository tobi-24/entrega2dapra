import { Link } from "react-router-dom"
import "./Item.css"


function Item ({id, name, img, price, stock}){
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <button className="Itembutton">
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </button>
        </article>
    )
}


export default Item