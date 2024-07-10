import { BaseRestService } from "../../../services/base.service";
import { StoreCreateDto } from "../dto/store-create-dto";
import { StoreResponseDto } from "../dto/store-response-dto";
import { StoreResponseManyDto } from "../dto/store-response-many-dto";
import { StoreUpdateDto } from "../dto/store-update-dto";

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
