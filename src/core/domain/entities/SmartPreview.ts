import { Column, Entity } from "typeorm";

@Entity("smart_preview", { schema: "makeshop" })
export class SmartPreview {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("varchar", { name: "preview_name", length: 20 })
  previewName: string;

  @Column("char", { name: "preview_use", length: 1, default: () => "'Y'" })
  previewUse: string;

  @Column("int", { name: "sort_num", unsigned: true, default: () => "'1'" })
  sortNum: number;

  @Column("varchar", { name: "pc_image_src", length: 200 })
  pcImageSrc: string;

  @Column("float", {
    name: "pc_image_width",
    unsigned: true,
    precision: 12,
    default: () => "'0'",
  })
  pcImageWidth: number;

  @Column("float", {
    name: "pc_image_height",
    unsigned: true,
    precision: 12,
    default: () => "'0'",
  })
  pcImageHeight: number;

  @Column("varchar", { name: "mo_image_src", length: 200 })
  moImageSrc: string;

  @Column("float", {
    name: "mo_image_width",
    unsigned: true,
    precision: 12,
    default: () => "'0'",
  })
  moImageWidth: number;

  @Column("float", {
    name: "mo_image_height",
    unsigned: true,
    precision: 12,
    default: () => "'0'",
  })
  moImageHeight: number;

  @Column("datetime", {
    name: "preview_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  previewModDate: Date;
}
