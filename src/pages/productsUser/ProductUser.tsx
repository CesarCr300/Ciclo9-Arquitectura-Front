import {ProductUserDetail} from "../productsUser/components/ProductUserDetail"
import {ProductUserHeader} from "../productsUser/components/ProductUserHeader"
import { ProductUserFooter } from "./components/ProductUserFooter"

 
export const ProductUser = () => {
    return (
        <div>
            <ProductUserHeader/>
            <ProductUserDetail/>
            <ProductUserFooter/>
        </div>
    )
}