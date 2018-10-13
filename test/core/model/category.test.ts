import { Category } from "../../../src/core/model/category";

describe("Category", () => {
    it("should have description", () => {
        const catShoes = new Category("Shoes");
        const catTv = new Category("Phones", "Mobile phones");

        expect(catShoes.description).toEqual("Shoes");
        expect(catTv.description).toEqual("Mobile phones");

        console.log(`${catShoes}`);
        console.log(`${catTv}`);
    });
});