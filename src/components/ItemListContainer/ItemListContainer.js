import 'bulma/css/bulma.min.css';
import { useState, useEffect } from 'react';
import { getProduct, getProductByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProduct
        
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1 className='subtitle is-2'>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer