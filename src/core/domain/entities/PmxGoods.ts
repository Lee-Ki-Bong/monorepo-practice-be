import { Column, Entity } from "typeorm";

@Entity("pmx_goods", { schema: "makeshop" })
export class PmxGoods {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", { name: "cat1", unsigned: true, default: () => "'0'" })
  cat1: number;

  @Column("int", { name: "cat2", unsigned: true, default: () => "'0'" })
  cat2: number;

  @Column("int", { name: "cat3", unsigned: true, default: () => "'0'" })
  cat3: number;

  @Column("int", { name: "cat4", unsigned: true, default: () => "'0'" })
  cat4: number;

  @Column("enum", {
    name: "state",
    enum: ["", "WAIT", "DONE", "PAUSE", "DELETE"],
    default: () => "'WAIT'",
  })
  state: "" | "WAIT" | "DONE" | "PAUSE" | "DELETE";

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;
}
