import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "cate1", "sort"], {})
@Entity("category_special", { schema: "makeshop" })
export class CategorySpecial {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "cate1", length: 3 })
  cate1: string;

  @Column("char", { primary: true, name: "cate2", length: 3 })
  cate2: string;

  @Column("char", { primary: true, name: "cate3", length: 3 })
  cate3: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("mediumint", { name: "sort", unsigned: true, default: () => "'0'" })
  sort: number;

  @Column("datetime", {
    name: "register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  registerDate: Date;
}
