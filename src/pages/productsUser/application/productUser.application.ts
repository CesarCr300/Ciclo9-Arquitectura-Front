import { fromProductUserResponseDtoToModel } from "../adapters/from-product-user-response-dto-to-model";
import {productUserService} from "../services/product-user.service"

export const getProductById = async (
    id: number,
    callEndpoint: any, setProducts: any
) => {
    const service = productUserService.getById(id);

    const response = await callEndpoint(service);
    console.log(response);
    setProducts(fromProductUserResponseDtoToModel(response.data));
}