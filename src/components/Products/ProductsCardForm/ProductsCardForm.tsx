import { useForm } from "react-hook-form";
import { useMemo} from "react";

import { FormContainer } from "../../Form/FormContainer";
import { ProductUpdate } from "../../../pages/productsCard/model/product-update.model";
import { ProductModel } from "../../../pages/productsCard/model/product.model";
import { Button } from "../../Button";
import { productsCardFormFields } from "./productsCardForm.fields";
import { ProductCreate } from "../../../pages/productsCreation/models/product-create.model";

interface IProductsCardForm {
  product: ProductModel | null;
  onSubmit: (data: any) => Promise<void> | void;
}

export const ProductsCardForm = ({
  product = null,
  onSubmit,
}: IProductsCardForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductUpdate | ProductCreate>({ mode: "onChange" });

  const fields = useMemo(
    () => productsCardFormFields(register, product),
    [product]
  );

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    handleSubmit((data) => {
      onSubmit({ ...data });
    })();
  };

  return (
    <FormContainer fields={fields} onSubmit={handleOnSubmit} errors={errors}>
      <Button text={product == null ? "Crear" : "Guardar"} type="submit" />
    </FormContainer>
  );
};
