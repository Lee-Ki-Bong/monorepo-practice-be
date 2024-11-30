import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("edgeaccount", { schema: "makeshop" })
export class Edgeaccount {
  @PrimaryGeneratedColumn({ type: "int", name: "num" })
  num: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("char", { name: "downrate", length: 1 })
  downrate: string;

  @Column("int", { name: "basketnum", default: () => "'0'" })
  basketnum: number;

  @Column("enum", {
    name: "accountstate",
    enum: ["", "N", "Y", "M"],
    default: () => "'N'",
  })
  accountstate: "" | "N" | "Y" | "M";

  @Column("varchar", { name: "orderdate", length: 14 })
  orderdate: string;

  @Column("varchar", { name: "accountdate", length: 14 })
  accountdate: string;
}
