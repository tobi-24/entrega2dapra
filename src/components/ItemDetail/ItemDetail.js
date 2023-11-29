import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"


const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={description} className="ItemImg"/>
            </picture>
            <section className="InfoSection">
                <p className="Category">
                    Categoria : {category}
                </p>
                <p className="Description">
                    Descripcion: {description}
                </p>
                <p className="Price">
                    Precio: ${price}
                </p>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
            </section>
        </article>
    )
}

export default ItemDetail