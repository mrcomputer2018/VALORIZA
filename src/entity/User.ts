import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;
   
    @UpdateDateColumn()
    updayed_at: Date;

    constructor() {
        // se estiver sendo criado um usuario
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };