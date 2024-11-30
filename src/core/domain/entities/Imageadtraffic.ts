import { Column, Entity } from "typeorm";

@Entity("imageadtraffic", { schema: "makeshop" })
export class Imageadtraffic {
  @Column("varchar", { name: "shopname", length: 50 })
  shopname: string;

  @Column("varchar", { primary: true, name: "id", length: 50 })
  id: string;

  @Column("varchar", { name: "category", length: 50 })
  category: string;

  @Column("varchar", { primary: true, name: "adtype", length: 50 })
  adtype: string;

  @Column("varchar", { name: "log", length: 50 })
  log: string;

  @Column("varchar", { primary: true, name: "date", length: 8 })
  date: string;

  @Column("int", {
    name: "account",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  account: number | null;

  @Column("varchar", { primary: true, name: "type", length: 50 })
  type: string;

  @Column("bigint", {
    name: "value",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  value: string | null;

  @Column("varchar", { name: "comment", nullable: true, length: 255 })
  comment: string | null;
}
