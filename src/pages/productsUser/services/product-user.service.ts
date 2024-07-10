import { BaseRestService } from "../../../services/base.service";
import { ProductUserCreateDto } from "../dtos/product-user-create-dto";
import { ProductUserResponseDto } from "../dtos/product-user-response-dto";
import {ProductUserResponseManyDto} from "../dtos/product-user-response-many-dto"
import { ProductUserUpdateDto } from "../dtos/product-user-update-dto";

class ProductUserService extends BaseRestService<
    ProductUserResponseDto,
    ProductUserResponseManyDto,
    ProductUserCreateDto,
    ProductUserUpdateDto
    >{
        constructor() {
            super("/products");
        }
    }

export const productUserService = new ProductUserService();