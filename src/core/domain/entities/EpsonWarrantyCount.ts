import { Column, Entity } from "typeorm";

@Entity("epson_warranty_count", { schema: "makeshop" })
export class EpsonWarrantyCount {
  @Column("int", { primary: true, name: "pw_uid", default: () => "'0'" })
  pwUid: number;

  @Column("varchar", {
    primary: true,
    name: "month",
    length: 6,
    default: () => "'000000'",
  })
  month: string;

  @Column("int", { name: "black_last_count", default: () => "'0'" })
  blackLastCount: number;

  @Column("int", { name: "black_cal_count", default: () => "'0'" })
  blackCalCount: number;

  @Column("int", { name: "color_last_count", default: () => "'0'" })
  colorLastCount: number;

  @Column("int", { name: "color_cal_count", default: () => "'0'" })
  colorCalCount: number;

  @Column("enum", {
    name: "cal_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  calStatus: "" | "Y" | "N";

  @Column("varchar", { name: "comment", length: 100 })
  comment: string;
}
