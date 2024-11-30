import { Column, Entity, Index } from "typeorm";

@Index("date", ["adminuser", "registType", "date", "ip"], {})
@Entity("board_regist_key", { schema: "makeshop" })
export class BoardRegistKey {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "regist_type",
    length: 10,
    default: () => "'BOARD'",
  })
  registType: string;

  @Column("varchar", { primary: true, name: "regist_key", length: 44 })
  registKey: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;
}
