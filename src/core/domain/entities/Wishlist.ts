import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "uid"], {})
@Index("date_regist", ["adminuser", "dateRegist"], {})
@Entity("wishlist", { schema: "makeshop" })
export class Wishlist {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("enum", {
    name: "option_type",
    enum: ["", "NO", "NU", "NL", "OC", "PC", "PP", "PS"],
    default: () => "'NO'",
  })
  optionType: "" | "NO" | "NU" | "NL" | "OC" | "PC" | "PP" | "PS";

  @Column("tinyint", { primary: true, name: "spcode", default: () => "'0'" })
  spcode: number;

  @Column("tinyint", { primary: true, name: "spcode2", default: () => "'0'" })
  spcode2: number;

  @Column("varchar", {
    primary: true,
    name: "optcode",
    length: 32,
    default: () => "'0'",
  })
  optcode: string;

  @Column("varchar", { primary: true, name: "optioncode", length: 32 })
  optioncode: string;

  @Column("mediumtext", { name: "optionvalue" })
  optionvalue: string;

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;
}
