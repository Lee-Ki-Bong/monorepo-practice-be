import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_bi_id", ["biId"], {})
@Index("index_edate", ["adminuser", "biBannerId", "biEndDate"], {})
@Index("index_sdate", ["adminuser", "biBannerId", "biStartDate"], {})
@Entity("banner_item", { schema: "makeshop" })
export class BannerItem {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "bi_banner_id",
    unsigned: true,
    default: () => "'0'",
  })
  biBannerId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "bi_id", unsigned: true })
  biId: number;

  @Column("varchar", { name: "bi_name", length: 255 })
  biName: string;

  @Column("smallint", { name: "bi_sort", unsigned: true, default: () => "'0'" })
  biSort: number;

  @Column("enum", {
    name: "bi_is_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  biIsDisplay: "" | "Y" | "N";

  @Column("datetime", {
    name: "bi_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  biStartDate: Date;

  @Column("datetime", {
    name: "bi_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  biEndDate: Date;

  @Column("set", {
    name: "bi_device",
    enum: ["pc", "mobile"],
    default: () => ["pc", "mobile"],
  })
  biDevice: ("pc" | "mobile")[];

  @Column("varchar", { name: "bi_image_pc", length: 255 })
  biImagePc: string;

  @Column("varchar", { name: "bi_image_mobile", length: 255 })
  biImageMobile: string;

  @Column("varchar", { name: "bi_image_info_pc", length: 255 })
  biImageInfoPc: string;

  @Column("varchar", { name: "bi_image_info_mobile", length: 255 })
  biImageInfoMobile: string;

  @Column("varchar", { name: "bi_link_pc", length: 255 })
  biLinkPc: string;

  @Column("varchar", { name: "bi_link_mobile", length: 255 })
  biLinkMobile: string;

  @Column("enum", {
    name: "bi_target_pc",
    enum: ["", "new", "self"],
    default: () => "'new'",
  })
  biTargetPc: "" | "new" | "self";

  @Column("enum", {
    name: "bi_target_mobile",
    enum: ["", "new", "self"],
    default: () => "'new'",
  })
  biTargetMobile: "" | "new" | "self";

  @Column("datetime", {
    name: "bi_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  biRegDate: Date;

  @Column("datetime", {
    name: "bi_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  biModDate: Date;
}
