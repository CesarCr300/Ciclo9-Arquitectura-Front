import { useEffect, useState } from "react"
import { ProductUserModel } from "../models/productUser.model"
import { useParams } from "react-router-dom";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import {getProductById} from "../application/productUser.application"
import "../style_product.css"

export  const ProductUserDetail = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState<ProductUserModel | null>(null);
    const {id} = useParams();
    const {callEndpoint} = useFetchAndLoad(setLoading);

    useEffect(() => {
        getProductById(id as unknown as number, callEndpoint, setProduct);
    }, [])
    return (
        <div>
            {loading && <p>Cargando...</p>}
            {product ? (
                <div id="product-container">
                <div id="product-image">
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                <div id="product-details">
                    <div id="product-name">{product.name ?? ""}</div>
                    <div id="product-price">S/. {product.price}</div>
                    <div id="product-description">{product.description}</div>
                    <div id="product-buttons">
                        <button id="add-to-cart">Añadir al carrito</button>
                        <button id="buy-now">Comprar ahora</button>
                    </div>
                </div>
            </div>
            ) : <div id="product-container">
            <div id="product-image">
                <img src="/public/img/nada.jpg"/>
            </div>
            <div id="product-details">
                <div id="product-name">No se encontró producto</div>
                <div id="product-price">S/.0.00</div>
                <div id="product-description">Si no hay producto no hay description ps</div>
                <div id="product-buttons">
                    <button id="add-to-cart">Añadir al carrito</button>
                    <button id="buy-now">Comprar ahora</button>
                </div>
            </div>
        </div>}

        </div>
    )
}