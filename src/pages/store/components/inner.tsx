import { useState, useEffect } from "react";
import { StoreModel } from "../models/store.model.ts";
import { useParams } from "react-router-dom";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad.ts";
import { getProductById } from "../application/store.application.ts";



export const Inner = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<StoreModel | null>(null);
  const { id } = useParams();
  const { callEndpoint } = useFetchAndLoad(setLoading);

  useEffect(() => {
    getProductById(id as unknown as number, callEndpoint, setProduct);
  }, []);

  return (
    <div>
      {loading && <p>Cargando...</p>}
      <div>
        <h3>{product?.name}</h3>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
      </div>
    </div>
  );
};
