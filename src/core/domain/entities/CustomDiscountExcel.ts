import { Column, Entity } from "typeorm";

@Entity("custom_discount_excel", { schema: "makeshop" })
export class CustomDiscountExcel {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "temp_key", length: 50 })
  tempKey: string;

  @Column("int", {
    primary: true,
    name: "cd_idx",
    unsigned: true,
    default: () => "'0'",
  })
  cdIdx: number;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "sku", length: 100 })
  sku: string;

  @Column("varchar", { name: "cd_result", length: 10 })
  cdResult: string;

  @Column("varchar", { name: "cd_process", length: 10 })
  cdProcess: string;

  @Column("datetime", {
    name: "cd_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cdRegDate: Date;
}
