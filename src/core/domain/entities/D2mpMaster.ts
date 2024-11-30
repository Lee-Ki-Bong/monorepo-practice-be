import { Column, Entity } from "typeorm";

@Entity("d2mp_master", { schema: "makeshop" })
export class D2mpMaster {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sku", length: 10 })
  sku: string;

  @Column("varchar", { name: "sku_name", length: 255 })
  skuName: string;

  @Column("varchar", { name: "material_type", length: 10 })
  materialType: string;

  @Column("char", { name: "tax_type", length: 1 })
  taxType: string;

  @Column("char", { name: "extinct", length: 1 })
  extinct: string;

  @Column("datetime", {
    name: "extinct_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  extinctDate: Date;

  @Column("varchar", { name: "stock_unit", length: 5 })
  stockUnit: string;

  @Column("int", { name: "sap_pc", unsigned: true, default: () => "'0'" })
  sapPc: number;

  @Column("int", { name: "sap_price", unsigned: true, default: () => "'0'" })
  sapPrice: number;

  @Column("varchar", { name: "sap_pcode", length: 10, default: () => "'0'" })
  sapPcode: string;

  @Column("varchar", { name: "sap_category", length: 20, default: () => "'0'" })
  sapCategory: string;

  @Column("varchar", { name: "sap_188_code", length: 20, default: () => "'0'" })
  sap_188Code: string;

  @Column("varchar", { name: "sap_88_code", length: 20, default: () => "'0'" })
  sap_88Code: string;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;
}
