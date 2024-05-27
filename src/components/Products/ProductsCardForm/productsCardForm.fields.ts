import { IFormFieldRender } from "../../Form/FormFieldsRender";
import { ProductModel } from "../../../pages/productsCard/model/product.model";

export const productsCardFormFields = (
  register: any,
  product: ProductModel | null
): IFormFieldRender[] => {
  const respuesta: IFormFieldRender[] = [
    {
      label: "Nombre",
      name: "name",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.name,
      registerOptions: {
        required: product == null && "El título es requerido",
      },
    },
    {
      label: "Descripción",
      name: "description",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.description,
      registerOptions: {
        required: product == null && "La descripción es requerida",
      },
    },
    {
      label: "Stock",
      name: "stock",
      type: "number",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.stock,
      registerOptions: {
        required: "El stock es requerido",
      },
    },
    {
      label: "Precio",
      name: "price",
      type: "number",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.price,
      registerOptions: {
        required: "El precio es requerido",
      },
    }
  ];
  return respuesta;
};
