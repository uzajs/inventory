import { CategoryRepository } from "../../src/infrastructure/repository/category-repository";
import { Category } from "../../src/model/category";

describe("CategoryRepository", () => {
    const rep = new CategoryRepository();
    const catTest = new Category("Test");
    rep.create(catTest);

    it("should find Category", () => {
        const cat = rep.get(catTest.id);
        expect(cat).not.toBeNull();
        console.log(`${cat}`);
    });

    it("should load Category list", () => {
        const cats = rep.getAll();
        expect(cats.length > 0);
        cats.forEach(x => console.log(`${x}`));
    });

    it("should add Category", () => {
        rep.create(new Category( "Another Test"));
        const cats = rep.getAll();
        expect(cats.length === 2);
        cats.forEach(x => console.log(`${x}`));
    });

    it("should remove Category", () => {
        rep.remove(catTest.id);
        const deletedcat = rep.get(catTest.id);
        expect(deletedcat).toBeUndefined();
    });
});