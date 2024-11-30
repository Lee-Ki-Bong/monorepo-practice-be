import { Column, Entity, Index } from "typeorm";

@Index("category", ["adminuser", "cate1", "cate2", "cate3", "date"], {})
@Index("special", ["adminuser", "cate1", "special", "specialDate"], {})
@Entity("virtual_category", { schema: "makeshop" })
export class VirtualCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("char", { primary: true, name: "cate1", length: 3 })
  cate1: string;

  @Column("char", { primary: true, name: "cate2", length: 3 })
  cate2: string;

  @Column("char", { primary: true, name: "cate3", length: 3 })
  cate3: string;

  @Column("enum", {
    name: "special",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  special: "" | "Y" | "N";

  @Column("datetime", {
    name: "special_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  specialDate: Date;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("bigint", { name: "x_sort", unsigned: true, default: () => "'0'" })
  xSort: string;

  @Column("bigint", { name: "m_sort", unsigned: true, default: () => "'0'" })
  mSort: string;

  @Column("bigint", { name: "s_sort", unsigned: true, default: () => "'0'" })
  sSort: string;
}
