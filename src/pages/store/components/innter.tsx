import { useState, useEffect } from "react";
import { StoreModel } from "../models/store.model.ts";
import { useParams } from "react-router-dom";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { getProductById } from "../application/store.application.ts";



export const inner = () => {
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
        {product?.name}
      </div>
    </div>
  );
};
