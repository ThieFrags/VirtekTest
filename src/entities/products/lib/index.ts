import { IProduct } from "../interface";
import {ProductCardsMock} from "../data";

export const getProductById = (id: string | number): IProduct | undefined => {
  return ProductCardsMock.find((product) => product.id === +id);
};
