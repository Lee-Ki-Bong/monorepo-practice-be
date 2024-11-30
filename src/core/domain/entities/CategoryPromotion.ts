import { Column, Entity } from "typeorm";

@Entity("category_promotion", { schema: "makeshop" })
export class CategoryPromotion {
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

  @Column("datetime", {
    name: "register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  registerDate: Date;
}
