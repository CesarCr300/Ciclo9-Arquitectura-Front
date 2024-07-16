import { StoreModel } from "../models/store.model.ts";

interface InnerProps{
  product: StoreModel;
}
export const Inner:React.FC<InnerProps> = ({product}) => {

  return (
      <div>
        <h3>{product?.name}</h3>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
      </div>

  );
};
