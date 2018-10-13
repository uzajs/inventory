import { EntityBase } from "../../../../sharedkernel/src/core/model/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class Category extends EntityBase {
    @Column()
    name: string;
    @Column()
    description: string;


    constructor(name: string, description?: string) {
        super();
        this.name = name;
        this.description = description ? description : name;
    }

    toString(): string {
        return `${this.name} (${this.description})`;
    }
}