import 'bulma/css/bulma.min.css';
import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = collection(db, 'item');
                const q = categoryId ? query(collectionRef, where("category", "==", categoryId)) : collectionRef;

                const response = await getDocs(q);

                if (response && response.docs) {
                    setItems(
                        response.docs.map((doc) => {
                            return { ...doc.data(), id: doc.id };
                        })
                    );
                } else {
                    console.error('Response or docs array is undefined.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [categoryId]);

    return (
        <div>
            <h2>{greeting}</h2>
            <section>
                <ItemList items={items} />
            </section>
        </div>
    );
};

export default ItemListContainer;
