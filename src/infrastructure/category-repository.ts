import { Category } from "../core/model/category";
import { ICategoryRepository } from "../core/interfaces/icategory-repository";
import { RepositoryBase } from "../../../sharedkernel/src/infrastructure/repository-base";
import { Connection } from "typeorm";

export class CategoryRepository extends RepositoryBase<Category> implements ICategoryRepository {

    constructor(connection: Connection) {
        super(connection);
    }
}