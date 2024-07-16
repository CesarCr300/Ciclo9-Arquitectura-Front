import { fromStoreResponseDtoToModel } from "../adapters/from-store-response-dto-to-model.ts";
import {storeSerivce} from "../services/store.service.ts"

export const getProductById = async (
    id: number,
    callEndpoint: any, setProducts: any
) => {
    const service = storeSerivce.getById(id);

    const response = await callEndpoint(service);
    console.log(response);
    setProducts(fromStoreResponseDtoToModel(response.data));
}