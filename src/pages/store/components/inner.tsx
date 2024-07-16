import { StoreModel } from "../models/store.model.ts";
import "../../../components/style_inner.css"

interface InnerProps{
  product: StoreModel;
}
export const Inner:React.FC<InnerProps> = ({product}) => {
  console.log(product.description)
  return (
      <div className="product-container">
        <a href={`/productsUser/${product.id}`} id={`div_product_${product.id}`} className="card">
        <img src={product.imageUrl }/>
        <h3>{product?.name}</h3>
        <p>{product?.description}</p>
        <p id="product_price">{product?.price}</p>
      </a>
      </div>

  );
};
