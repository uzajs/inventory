import { ICategoryRepository } from "../../interfaces/repositories/icategory-repository";
import { Category } from "../../model/category";

export class CategoryRepository implements ICategoryRepository {

    cats: Array<Category> = [
        new Category("Clothes"),
        new Category("Electronics", "Electronics devices")
    ];

    getAll(): Array<Category> {
        return this.cats;
    }
}