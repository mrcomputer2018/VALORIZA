import { Column, Entity, PrimaryColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Tag } from './Tag';
import { User } from './User';

@Entity('compliments')
class Compliment {
    @PrimaryColumn({ type: 'uuid'})
    readonly id: string

    @Column({ type: 'uuid'})
    user_sender: string

    @Column({ type: 'uuid' })
    user_receiver: string

    @Column({ type: 'uuid' })
    tag_id: string

    @Column({ type: 'varchar' })
    message: string

    @CreateDateColumn({ type: 'timestamp', default: 'now()'})
    created_at: Date

    @ManyToOne(() => Tag, tag => tag.compliments)
    @JoinColumn({ name: 'tag_id' })
    tag: Tag

    @ManyToOne(() => User, userRceiver => userRceiver.compliments)
    @JoinColumn({ name: 'user_receiver' })
    userReceiver : User

    @ManyToOne(() => User, userRceiver => userRceiver.compliments)
    @JoinColumn({ name: 'user_sender' })
    userSender : User

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Compliment };

