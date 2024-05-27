import { IProductCreateDto } from "../../../dtos/products/product-create.dto";
import { ProductCreate } from "../models/product-create.model";

export const fromProductCreateModelToProductCreateDto = (
  product: ProductCreate
): IProductCreateDto => {
  return {
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
  };
};
