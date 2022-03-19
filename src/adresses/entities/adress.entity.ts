import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('adress')
export class Adress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cep = Column(String(9));

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  neighborhood: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
