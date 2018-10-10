import { Entity } from "../../../sharedkernel/src/model/entity";
import { Guid } from "guid-typescript";

export class Category extends Entity<Guid> {
    name: string;
    description: string;


    constructor(name: string, description: string = "") {
        super();
        this.id = Guid.create();
        this.name = name;
        this.description = description.trim().length === 0 ? name : description;
    }

    toString(): string {
        return `${this.name} (${this.description})`;
    }
}