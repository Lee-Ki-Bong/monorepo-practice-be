import { Column, Entity } from "typeorm";

@Entity("product_seil", { schema: "makeshop" })
export class ProductSeil {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { name: "ps_num", length: 64 })
  psNum: string;

  @Column("int", {
    name: "ps_wholeprice",
    unsigned: true,
    default: () => "'0'",
  })
  psWholeprice: number;

  @Column("varchar", { name: "ps_insurnum", length: 64 })
  psInsurnum: string;

  @Column("varchar", { name: "ps_standnum", length: 64 })
  psStandnum: string;

  @Column("varchar", { name: "ps_catalpage", length: 32 })
  psCatalpage: string;

  @Column("varchar", { name: "ps_importer", length: 32 })
  psImporter: string;

  @Column("enum", {
    name: "ps_type",
    enum: ["", "B", "M", "I", "O"],
    default: () => "'B'",
  })
  psType: "" | "B" | "M" | "I" | "O";

  @Column("char", { name: "ps_policy", length: 1, default: () => "'N'" })
  psPolicy: string;

  @Column("float", {
    name: "add_info_num_1",
    precision: 12,
    default: () => "'0'",
  })
  addInfoNum_1: number;

  @Column("float", {
    name: "add_info_num_2",
    precision: 12,
    default: () => "'0'",
  })
  addInfoNum_2: number;
}
