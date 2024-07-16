import  { useState, useEffect } from "react";
import { Inner } from "./inner.tsx";
import { StoreModel } from "../models/store.model.ts";

export const StoreProducts = () => {
  const [products, setProducts] = useState<StoreModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:3000/products") 
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data); 
        if (Array.isArray(data.data)) { // Accede a data.data
          setProducts(data.data);
        } else {
          console.error('La respuesta del backend no contiene un array en data');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Cargando productos...</p>;
  }
  return (
    <div id="content">
       {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <Inner key={product.id} product={product} />
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};
