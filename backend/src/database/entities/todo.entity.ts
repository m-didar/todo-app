import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('posts')
export class TodoEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    important!: boolean;

    @Column()
    done!: boolean
}
