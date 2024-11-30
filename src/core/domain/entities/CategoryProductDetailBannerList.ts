import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category_product_detail_banner_list", { schema: "makeshop" })
export class CategoryProductDetailBannerList {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "banner_uid", length: 20 })
  bannerUid: string;

  @Column("varchar", { name: "sort_num", length: 14 })
  sortNum: string;

  @Column("enum", {
    name: "display_position",
    enum: ["", "ALL", "PC", "MOBILE"],
    default: () => "'ALL'",
  })
  displayPosition: "" | "ALL" | "PC" | "MOBILE";

  @Column("mediumtext", { name: "alt", nullable: true })
  alt: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 100 })
  image: string | null;

  @Column("varchar", { name: "image_mobile", nullable: true, length: 100 })
  imageMobile: string | null;

  @Column("varchar", { name: "link", nullable: true, length: 255 })
  link: string | null;

  @Column("varchar", { name: "link_mobile", nullable: true, length: 255 })
  linkMobile: string | null;

  @Column("enum", {
    name: "link_target",
    enum: ["", "SELF", "BLANK"],
    default: () => "'SELF'",
  })
  linkTarget: "" | "SELF" | "BLANK";

  @Column("enum", {
    name: "link_mobile_target",
    enum: ["", "SELF", "BLANK"],
    default: () => "'SELF'",
  })
  linkMobileTarget: "" | "SELF" | "BLANK";

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("datetime", {
    name: "end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  endDate: Date;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
