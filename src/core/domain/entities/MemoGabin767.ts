import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("memo_gabin767", { schema: "makeshop" })
export class MemoGabin767 {
  @PrimaryGeneratedColumn({ type: "int", name: "idx", unsigned: true })
  idx: number;

  @Column("varchar", { name: "password", length: 20 })
  password: string;

  @Column("mediumtext", { name: "memo" })
  memo: string;

  @Column("varchar", { name: "ip", length: 20 })
  ip: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("varchar", { name: "name", length: 20, default: () => "'GUEST'" })
  name: string;

  @Column("enum", { name: "shows", enum: ["", "Y", "N"], default: () => "'N'" })
  shows: "" | "Y" | "N";

  @Column("int", { name: "view", default: () => "'0'" })
  view: number;

  @Column("set", {
    name: "board",
    nullable: true,
    enum: ["memo", "writer", "ss"],
  })
  board: ("memo" | "writer" | "ss")[] | null;
}
