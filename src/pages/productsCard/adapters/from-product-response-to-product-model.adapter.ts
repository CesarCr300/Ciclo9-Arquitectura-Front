import { IProductResponseDto } from "../../../dtos/products/product-response.dto";
import { ProductModel } from "../model/product.model";

export const fromProductResponseToProductModelAdapter = (
  productResponse: IProductResponseDto
): ProductModel => {
  return {
    id: productResponse.id,
    description: productResponse.description,
    stock: productResponse.stock,
    price: productResponse.price,
    name: productResponse.name,
  };
};
