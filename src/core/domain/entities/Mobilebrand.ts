import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_brand_id", ["brandId"], {})
@Index("origin_uid_search", ["adminuser", "originalUid"], {})
@Entity("mobilebrand", { schema: "makeshop" })
export class Mobilebrand {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "brand_id", unsigned: true })
  brandId: number;

  @Column("int", { name: "category_id", unsigned: true, default: () => "'0'" })
  categoryId: number;

  @Column("int", { name: "original_uid", unsigned: true, default: () => "'0'" })
  originalUid: number;

  @Column("varchar", { name: "brandcode", length: 12 })
  brandcode: string;

  @Column("varchar", { name: "title", length: 200 })
  title: string;

  @Column("varchar", { name: "title_color", nullable: true, length: 6 })
  titleColor: string | null;

  @Column("int", {
    name: "customer_price",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  customerPrice: number | null;

  @Column("int", { name: "price", unsigned: true, default: () => "'0'" })
  price: number;

  @Column("int", {
    name: "reserve",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  reserve: number | null;

  @Column("varchar", { name: "delivery", length: 10, default: () => "'0'" })
  delivery: string;

  @Column("varchar", { name: "stock", length: 10, default: () => "'0'" })
  stock: string;

  @Column("enum", {
    name: "stocksync",
    nullable: true,
    enum: ["", "SYNC", "UNLIMIT", "OPTION", "NONE"],
    default: () => "'NONE'",
  })
  stocksync: "" | "SYNC" | "UNLIMIT" | "OPTION" | "NONE" | null;

  @Column("mediumtext", { name: "optioninfo", nullable: true })
  optioninfo: string | null;

  @Column("mediumtext", { name: "description" })
  description: string;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N";

  @Column("datetime", {
    name: "created",
    default: () => "'0000-00-00 00:00:00'",
  })
  created: Date;

  @Column("datetime", {
    name: "updated",
    default: () => "'0000-00-00 00:00:00'",
  })
  updated: Date;
}
