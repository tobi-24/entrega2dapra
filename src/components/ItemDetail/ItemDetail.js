import ItemCount from "../ItemCount/ItemCount"
import Footer from "../Footer/Footer"
const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={description} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria : {category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
            </section>
            <Footer />
        </article>
    )
}

export default ItemDetail