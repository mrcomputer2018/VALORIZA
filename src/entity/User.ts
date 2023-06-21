// referencia da nossa tabela no banco de dados
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
    @PrimaryColumn({ type: 'uuid' })
    readonly id: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'boolean' })
    admin: boolean;

    @CreateDateColumn({ type: 'timestamp', default: 'now()' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: 'now()' })
    updated_at: Date;

    constructor() {
        // se estiver sendo criado um usuario
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
