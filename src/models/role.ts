import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Role {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text', nullable: false })
  name!: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date?: string;
}
