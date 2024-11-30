import { Column, Entity } from "typeorm";

@Entity("tmp_orderdata", { schema: "makeshop" })
export class TmpOrderdata {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("char", { name: "deli_com", nullable: true, length: 3 })
  deliCom: string | null;

  @Column("varchar", { name: "deli_num", nullable: true, length: 32 })
  deliNum: string | null;

  @Column("varchar", { name: "md_id", length: 12 })
  mdId: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", {
    name: "ip",
    length: 15,
    default: () => "'000.000.000.000'",
  })
  ip: string;

  @Column("enum", {
    name: "process",
    nullable: true,
    enum: ["", "NONE", "COMPLETE"],
  })
  process: "" | "NONE" | "COMPLETE" | null;
}
