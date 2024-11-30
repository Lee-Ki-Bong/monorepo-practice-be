import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_plan_id", ["planId"], {})
@Entity("plan", { schema: "makeshop" })
export class Plan {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "plan_id" })
  planId: number;

  @Column("varchar", { name: "code", length: 6 })
  code: string;

  @Column("int", { name: "type", default: () => "'0'" })
  type: number;

  @Column("varchar", { name: "leftmenu", length: 4, default: () => "'NO'" })
  leftmenu: string;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("date", { name: "startdate", nullable: true })
  startdate: string | null;

  @Column("date", { name: "enddate", nullable: true })
  enddate: string | null;

  @Column("int", { name: "productnum", nullable: true, default: () => "'5'" })
  productnum: number | null;

  @Column("enum", {
    name: "consumerprice",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  consumerprice: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "soldout",
    nullable: true,
    enum: ["", "Y", "N", "A"],
    default: () => "'Y'",
  })
  soldout: "" | "Y" | "N" | "A" | null;

  @Column("char", {
    name: "mainbannertype",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  mainbannertype: string | null;

  @Column("varchar", { name: "mainbannertext", nullable: true, length: 255 })
  mainbannertext: string | null;

  @Column("char", {
    name: "topbannertype",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  topbannertype: string | null;

  @Column("mediumtext", { name: "topbannertext", nullable: true })
  topbannertext: string | null;

  @Column("mediumtext", { name: "product", nullable: true })
  product: string | null;

  @Column("char", {
    name: "display",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  display: string | null;

  @Column("datetime", { name: "date", nullable: true })
  date: Date | null;

  @Column("int", { name: "category1", nullable: true })
  category1: number | null;

  @Column("int", { name: "category2", nullable: true })
  category2: number | null;

  @Column("mediumtext", { name: "tag", nullable: true })
  tag: string | null;

  @Column("enum", {
    name: "theme",
    nullable: true,
    enum: [
      "",
      "NONE",
      "GIFT",
      "COUPON",
      "MILEAGE",
      "FREESHIPPING",
      "FREEINTEREST",
    ],
    default: () => "'NONE'",
  })
  theme:
    | ""
    | "NONE"
    | "GIFT"
    | "COUPON"
    | "MILEAGE"
    | "FREESHIPPING"
    | "FREEINTEREST"
    | null;

  @Column("enum", {
    name: "promotion",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  promotion: "" | "Y" | "N" | null;

  @Column("varchar", { name: "status", length: 8, default: () => "'CREATED'" })
  status: string;

  @Column("int", { name: "assort_id", default: () => "'0'" })
  assortId: number;

  @Column("enum", {
    name: "category_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  categoryUse: "" | "Y" | "N";

  @Column("int", { name: "page_width", default: () => "'780'" })
  pageWidth: number;

  @Column("enum", {
    name: "design_type",
    enum: ["", "1", "2", "3", "4", "5", "6", "7", "N"],
    default: () => "'N'",
  })
  designType: "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "N";

  @Column("enum", {
    name: "cate_list",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  cateList: "" | "Y" | "N";

  @Column("int", { name: "catelistnum", default: () => "'4'" })
  catelistnum: number;

  @Column("enum", {
    name: "page_link",
    enum: ["", "S", "N"],
    default: () => "'S'",
  })
  pageLink: "" | "S" | "N";
}
