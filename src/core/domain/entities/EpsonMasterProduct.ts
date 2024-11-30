import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("category", ["cate1", "cate2", "cate3"], {})
@Index("ms_type", ["msType"], {})
@Index("product_name", ["productName"], {})
@Index("sap_code", ["sapCode"], {})
@Index("serial_rule", ["serialRule"], {})
@Entity("epson_master_product", { schema: "makeshop" })
export class EpsonMasterProduct {
  @PrimaryGeneratedColumn({ type: "int", name: "ms_uid", unsigned: true })
  msUid: number;

  @Column("varchar", { name: "ms_type", length: 20 })
  msType: string;

  @Column("varchar", { name: "sap_code", length: 20 })
  sapCode: string;

  @Column("varchar", { name: "serial_rule", length: 20 })
  serialRule: string;

  @Column("varchar", { name: "product_name", length: 255 })
  productName: string;

  @Column("char", { name: "cate1", length: 3 })
  cate1: string;

  @Column("char", { name: "cate2", length: 3 })
  cate2: string;

  @Column("char", { name: "cate3", length: 3 })
  cate3: string;

  @Column("int", { name: "free_warranty", default: () => "'0'" })
  freeWarranty: number;

  @Column("mediumtext", { name: "manager_email" })
  managerEmail: string;

  @Column("enum", {
    name: "use_sell",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useSell: "" | "Y" | "N";

  @Column("enum", {
    name: "use_coverplus",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useCoverplus: "" | "Y" | "N";

  @Column("date", { name: "coverplus_sdate", default: () => "'0000-00-00'" })
  coverplusSdate: string;

  @Column("date", { name: "coverplus_edate", default: () => "'0000-00-00'" })
  coverplusEdate: string;

  @Column("enum", {
    name: "use_warranty",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useWarranty: "" | "Y" | "N";

  @Column("mediumtext", { name: "spec_info" })
  specInfo: string;

  @Column("mediumtext", { name: "expendable_product_info" })
  expendableProductInfo: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
