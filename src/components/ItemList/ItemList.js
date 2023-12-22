import Item from "../Item/Item";

const ItemList = ({items}) => {
    return(
        <div className="ListGroup">
            {items.map(items => <Item key ={items.id} {...items}/>)}
        </div>
    )
}

export default ItemList