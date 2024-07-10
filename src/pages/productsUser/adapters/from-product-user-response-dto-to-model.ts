import { ProductUserModel } from "../models/productUser.model";
import {ProductUserResponseDto} from "../dtos/product-user-response-dto"

export const fromProductUserResponseDtoToModel = (
    dto: ProductUserResponseDto,
): ProductUserModel => {
    return {
        id: dto.id,
        name: dto.name,
        price: dto.price,
        stock: dto.stock,
        description: dto.description,
    }
}