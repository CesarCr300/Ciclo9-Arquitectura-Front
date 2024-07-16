import { BaseRestService } from "../../../services/base.service";
import { StoreCreateDto } from "../dtos/store-create-dto";
import { StoreResponseDto } from "../dtos/store-response-dto";
import { StoreResponseManyDto } from "../dtos/store-response-many-dto";
import { StoreUpdateDto } from "../dtos/store-update-dto";

class StoreSerivce extends BaseRestService<
  StoreCreateDto,
  StoreResponseDto,
  StoreResponseManyDto,
  StoreUpdateDto
> {
    constructor(){
        super("/products")
    }
}

export const storeSerivce = new StoreSerivce();
