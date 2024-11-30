import { Column, Entity, Index } from "typeorm";

@Index("id", ["adminuser", "pmdtId"], {})
@Entity("product_main_display_temp", { schema: "makeshop" })
export class ProductMainDisplayTemp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "pmdt_id",
    unsigned: true,
    default: () => "'0'",
  })
  pmdtId: number;

  @Column("smallint", {
    primary: true,
    name: "special",
    unsigned: true,
    default: () => "'0'",
  })
  special: number;

  @Column("enum", {
    primary: true,
    name: "device",
    enum: ["", "PC", "MOBILE"],
    default: () => "'PC'",
  })
  device: "" | "PC" | "MOBILE";

  @Column("enum", {
    primary: true,
    name: "link_path",
    enum: ["", "SHOP", "NAVER", "DAUM", "GOOGLE"],
    default: () => "'SHOP'",
  })
  linkPath: "" | "SHOP" | "NAVER" | "DAUM" | "GOOGLE";

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("enum", {
    name: "use_fixed",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useFixed: "" | "Y" | "N";

  @Column("int", { name: "sort", unsigned: true, default: () => "'0'" })
  sort: number;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;
}
