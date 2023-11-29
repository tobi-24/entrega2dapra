import imgIphone8 from "./img/iphone-8.jpeg"
import imgIphoneX from "./img/iphone-x.jpg"
import imgTabletA8 from "./img/samsung-a8.jpg"
import imgNotebook3 from "./img/samsung-book3.jpeg"


const products = [
    {
        id: '1',
        name: 'Iphone 8',
        price: '90000',
        category: 'celular',
        img: imgIphone8,
        stock: '5',
        description: 'El iPhone 8 es un smartphone de Apple que combina un diseño elegante con un rendimiento potente. Presenta una pantalla Retina de 4.7 pulgadas, una cámara avanzada de 12 MP, y está impulsado por el chip A11 Bionic para un funcionamiento rápido y eficiente. Con carga inalámbrica y resistencia al agua, el iPhone 8 ofrece una experiencia premium en un formato compacto y atractivo.',
    },
    {
        id: '2',
        name: 'Iphone X',
        price: '150000',
        category: 'celular',
        img: imgIphoneX,
        stock: '2',
        description: 'El iPhone X es un smartphone de alta gama desarrollado por Apple. Se destaca por su pantalla Super Retina de 5.8 pulgadas, reconocimiento facial Face ID, cámara dual avanzada, y un diseño elegante con vidrio en la parte delantera y trasera, con marcos de acero inoxidable.',
    },
    {
        id: '3',
        name: 'Tablet A8',
        price: '100000',
        category: 'tablets',
        img: imgTabletA8,
        stock: '7',
        description: 'La tablet Samsung Galaxy Tab A8 es una solución versátil y potente para tus necesidades digitales. Con una pantalla nítida de 8 pulgadas, procesador eficiente y sistema Android, proporciona un rendimiento ágil y una experiencia visual envolvente. Además, su diseño delgado y ligero la hace perfecta para la movilidad, mientras que sus funciones avanzadas, como la conectividad LTE opcional, la convierten en una opción ideal para trabajar o disfrutar del entretenimiento sobre la marcha.',
    },
    {
        id: '4',
        name: 'Galaxy Book 3',
        price: '800000',
        category: 'notebook',
        img: imgNotebook3,
        stock: '2',
        description: 'La Samsung Galaxy Book3 es una laptop potente y versátil que combina rendimiento excepcional con portabilidad. Con un procesador eficiente, pantalla vibrante y diseño elegante, ofrece una experiencia de productividad y entretenimiento de alta calidad. Equipada con características como una amplia capacidad de almacenamiento y conectividad avanzada, la Galaxy Book3 es ideal para usuarios que buscan un dispositivo premium que satisfaga sus necesidades tanto laborales como de ocio.',
    },
]   

export const getProduct = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) =>{

    return new Promise ((resolve) =>{

        setTimeout ( ()=>{
            resolve(products.filter(prod =>prod.category === categoryId))
        }, 500)
    })
}