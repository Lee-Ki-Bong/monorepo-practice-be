import { Column, Entity } from "typeorm";

@Entity("product_model", { schema: "makeshop" })
export class ProductModel {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
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
    name: "mi_uid",
    unsigned: true,
    default: () => "'0'",
  })
  miUid: number;

  @Column("varchar", { name: "mi_name", length: 30 })
  miName: string;

  @Column("datetime", {
    name: "date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateInsert: Date;
}
