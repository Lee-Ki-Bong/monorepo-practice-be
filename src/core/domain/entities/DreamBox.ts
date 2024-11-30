import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dream_box', { schema: 'makeshop' })
export class DreamBox {
  @PrimaryGeneratedColumn({ type: 'int', name: 'db_uid', unsigned: true })
  dbUid: number;

  @Column('mediumint', {
    name: 'episode',
    unsigned: true,
    default: () => "'1'",
  })
  episode: number;

  @Column('smallint', { name: '1st', unsigned: true, default: () => "'1'" })
  first: number;

  @Column('smallint', { name: '2nd', unsigned: true, default: () => "'1'" })
  second: number;

  @Column('smallint', { name: '3rd', unsigned: true, default: () => "'1'" })
  third: number;

  @Column('smallint', { name: '4th', unsigned: true, default: () => "'1'" })
  fourth: number;

  @Column('smallint', { name: '5th', unsigned: true, default: () => "'1'" })
  fifth: number;

  @Column('smallint', { name: '6th', unsigned: true, default: () => "'1'" })
  sixth: number;
}
