import { Column, Entity, Index } from "typeorm";

@Index("product", ["adminuser", "uid", "dateRegist"], {})
@Entity("product_color", { schema: "makeshop" })
export class ProductColor {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    primary: true,
    name: "color_id",
    unsigned: true,
    default: () => "'0'",
  })
  colorId: number;

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;

  @Column("int", { name: "sort", nullable: true, unsigned: true })
  sort: number | null;
}
