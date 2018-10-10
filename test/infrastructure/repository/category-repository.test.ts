import { CategoryRepository } from "../../../src/infrastructure/repository/category-repository";
import { ICategoryRepository } from "../../../src/interfaces/repositories/icategory-repository";

describe("CategoryRepository", () => {
    it("Get list of Categories", () => {
        const cat: ICategoryRepository = new CategoryRepository();

        const cats = cat.getAll();

        expect(cats.length > 0);

        cats.forEach(c => console.log(`${c}`));

    });
});