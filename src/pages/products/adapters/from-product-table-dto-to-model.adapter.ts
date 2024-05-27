import { IProductTableDto } from "../dtos/product-table-dto";
import { ProductTableModel } from "../models/product-table-model";

const fromProductTableDtoToModel = (
  dto: IProductTableDto
): ProductTableModel => ({
  id: dto.id,
  stock: dto.stock,
  price: dto.price,
  name: dto.name,
});

export const fromProductTableDtosToModels = (
  dtos: IProductTableDto[]
): ProductTableModel[] => dtos.map(fromProductTableDtoToModel);
