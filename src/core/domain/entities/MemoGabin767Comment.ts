import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("memo_gabin767_comment", { schema: "makeshop" })
export class MemoGabin767Comment {
  @PrimaryGeneratedColumn({ type: "int", name: "idx", unsigned: true })
  idx: number;

  @Column("varchar", { name: "password", length: 20 })
  password: string;

  @Column("mediumtext", { name: "comment" })
  comment: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("varchar", { name: "name", length: 20, default: () => "'GUEST'" })
  name: string;

  @Column("int", {
    primary: true,
    name: "memo_idx",
    unsigned: true,
    default: () => "'0'",
  })
  memoIdx: number;

  @Column("enum", { name: "shows", enum: ["", "Y", "N"], default: () => "'N'" })
  shows: "" | "Y" | "N";
}
