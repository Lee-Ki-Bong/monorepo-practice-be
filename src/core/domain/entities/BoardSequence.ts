import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("board_sequence", { schema: "makeshop" })
export class BoardSequence {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @PrimaryGeneratedColumn({ type: "int", name: "seq", unsigned: true })
  seq: number;
}
