import { Category } from "../../src/core/model/category";
import { ICategoryRepository } from "../../src/core/interfaces/icategory-repository";
import { CategoryRepository } from "../../src/infrastructure/category-repository";
import { createConnection } from "typeorm";
import * as fs from "fs";
import * as faker from "faker";

describe("CategoryRepository", () => {
    const dbPath: string = "test/uza-inventory-test.sqlite3";
    let repository: ICategoryRepository;
    beforeAll(async () => {
        fs.unlink(dbPath, (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log("db deleted !");
            }
        );
        const connection = await createConnection({
            logging: true,
            type: "sqlite",
            database: dbPath,
            entities: ["./src/core/model/*.ts"],
            synchronize: true
        });
        repository = new CategoryRepository(connection);
    });

    test("should create Category", async () => {
        const category = await repository.create(new Category(faker.commerce.product()));
        expect(category).not.toBeUndefined();
        console.log(`${category}`);
    });

    test("should create batch Categories", async () => {
        const categories = await repository.createBatch(
            [
                new Category(faker.commerce.product()),
                new Category(faker.commerce.product())
            ]
        );
        expect(categories.length === 2);
        categories.forEach((c: Category) => console.log(`${c}`));
    });
});