import { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { db } from '../../services/firebase/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'item', itemId)

        getDoc(docRef)
            .then(response =>{
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setItem(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [itemId] )

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...item} />
        </div>
    )
}

export default ItemDetailContainer