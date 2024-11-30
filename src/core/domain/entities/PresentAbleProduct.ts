import { Column, Entity } from "typeorm";

@Entity("present_able_product", { schema: "makeshop" })
export class PresentAbleProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("datetime", {
    name: "regist_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  registDate: Date;

  @Column("varchar", { name: "regist_subid", length: 12 })
  registSubid: string;
}
