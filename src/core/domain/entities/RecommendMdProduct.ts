import { Column, Entity } from "typeorm";

@Entity("recommend_md_product", { schema: "makeshop" })
export class RecommendMdProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "list_uid",
    unsigned: true,
    default: () => "'0'",
  })
  listUid: number;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("int", {
    name: "set_order",
    nullable: true,
    unsigned: true,
    default: () => "'99999'",
  })
  setOrder: number | null;
}
