import { ICategoryRepository } from "../../interfaces/repositories/icategory-repository";
import { Category } from "../../model/category";
import { Guid } from "guid-typescript";
import { BaseRepository } from "../../../../sharedkernel/src/infrastructure/base-repository";

export class CategoryRepository extends BaseRepository<Category, Guid> implements ICategoryRepository {
}