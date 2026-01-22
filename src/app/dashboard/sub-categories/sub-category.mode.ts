import { Category } from "../categories/category.model";
import { VariationsTypes } from "./variation-types/variation-types.mode";

export interface SubCategory {
    id: number;
    name: string;
    categories: Category;
    variations_types: VariationsTypes[]
}