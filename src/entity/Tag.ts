import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

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

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Tag };
