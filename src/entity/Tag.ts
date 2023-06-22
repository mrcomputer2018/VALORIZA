import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Compliment } from "./Compliment";

@ Entity('tags')
class Tag {
    @PrimaryColumn({ type: 'uuid' })
    readonly id: string

    @Column({ type: 'varchar' })
    name: string

    @CreateDateColumn({ type: 'timestamp', default: 'now()'})
    created_at: Date

    @UpdateDateColumn({ type: 'timestamp', default: 'now()'})
    updated_at: Date

    @OneToMany(() => Compliment, (compliment: { tag: string; }) => compliment.tag)
    compliments: Compliment[]

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Tag };
