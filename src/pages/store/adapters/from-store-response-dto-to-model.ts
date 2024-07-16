import { StoreModel } from "../models/store.model.ts";
import {StoreResponseDto} from "../dtos/store-response-dto.ts"

export const fromStoreResponseDtoToModel = (
    dto: StoreResponseDto,
): StoreModel => {
    return {
        id: dto.id,
        name: dto.name,
        price: dto.price,
        stock: dto.stock,
        description: dto.description,
    }
}