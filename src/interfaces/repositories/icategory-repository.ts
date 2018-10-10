import { IRepository } from "../../../../sharedkernel/src/interfaces/irepository";
import { Category } from "../../model/category";
import { Guid } from "guid-typescript";

export interface ICategoryRepository extends IRepository<Category, Guid> {

}