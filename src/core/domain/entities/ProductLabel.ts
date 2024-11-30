import { Column, Entity } from "typeorm";

@Entity("product_label", { schema: "makeshop" })
export class ProductLabel {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("enum", {
    primary: true,
    name: "label_path",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  labelPath: "" | "WEB" | "MOBILE";

  @Column("enum", {
    primary: true,
    name: "label_type",
    enum: ["", "DEFAULT", "USER"],
    default: () => "'DEFAULT'",
  })
  labelType: "" | "DEFAULT" | "USER";

  @Column("int", {
    primary: true,
    name: "label_no",
    unsigned: true,
    default: () => "'0'",
  })
  labelNo: number;

  @Column("varchar", { name: "label_location", length: 100 })
  labelLocation: string;

  @Column("datetime", {
    name: "label_exposure_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  labelExposureStartDate: Date;

  @Column("datetime", {
    name: "label_exposure_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  labelExposureEndDate: Date;

  @Column("tinyint", { name: "label_sort", width: 1, default: () => "'0'" })
  labelSort: boolean;
}
