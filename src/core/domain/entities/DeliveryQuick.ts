import { Column, Entity } from "typeorm";

@Entity("delivery_quick", { schema: "makeshop" })
export class DeliveryQuick {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "delivery_flag",
    enum: ["", "Y", "N", "M"],
    default: () => "'N'",
  })
  deliveryFlag: "" | "Y" | "N" | "M";

  @Column("char", { name: "code", length: 3, default: () => "'900'" })
  code: string;

  @Column("varchar", { name: "company", length: 30 })
  company: string;

  @Column("varchar", { name: "comment", nullable: true, length: 100 })
  comment: string | null;

  @Column("varchar", { name: "deli_id", nullable: true, length: 12 })
  deliId: string | null;

  @Column("enum", {
    name: "area_flag",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  areaFlag: "" | "Y" | "N";

  @Column("mediumtext", { name: "area", nullable: true })
  area: string | null;

  @Column("mediumtext", { name: "area_code", nullable: true })
  areaCode: string | null;

  @Column("enum", {
    name: "day_flag",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  dayFlag: "" | "Y" | "N";

  @Column("varchar", { name: "day", nullable: true, length: 20 })
  day: string | null;

  @Column("enum", {
    name: "hourly_flag",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  hourlyFlag: "" | "Y" | "N";

  @Column("enum", {
    name: "hourly_viewflag",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  hourlyViewflag: "" | "Y" | "N";

  @Column("varchar", { name: "hourly", nullable: true, length: 200 })
  hourly: string | null;

  @Column("enum", { name: "icon", enum: ["", "Y", "N"], default: () => "'N'" })
  icon: "" | "Y" | "N";

  @Column("enum", {
    name: "price_type",
    enum: ["", "F", "C"],
    default: () => "'C'",
  })
  priceType: "" | "F" | "C";

  @Column("int", { name: "price", unsigned: true, default: () => "'0'" })
  price: number;
}
