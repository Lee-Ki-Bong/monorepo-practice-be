import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pc_uid", ["pcUid"], {})
@Index("search_key", ["adminuser", "pcDisplay", "atUid", "pcTitle"], {})
@Entity("pictalk", { schema: "makeshop" })
export class Pictalk {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pc_uid" })
  pcUid: number;

  @Column("int", { name: "at_uid", default: () => "'0'" })
  atUid: number;

  @Column("varchar", { name: "pc_title", length: 255 })
  pcTitle: string;

  @Column("enum", {
    name: "pc_display",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pcDisplay: "" | "Y" | "N" | null;

  @Column("datetime", {
    name: "pc_dp_start",
    default: () => "'0000-00-00 00:00:00'",
  })
  pcDpStart: Date;

  @Column("datetime", {
    name: "pc_dp_end",
    default: () => "'0000-00-00 00:00:00'",
  })
  pcDpEnd: Date;

  @Column("datetime", {
    name: "pc_best_start",
    default: () => "'0000-00-00 00:00:00'",
  })
  pcBestStart: Date;

  @Column("enum", {
    name: "pc_best_select_type",
    enum: ["", "A", "M"],
    default: () => "'A'",
  })
  pcBestSelectType: "" | "A" | "M";

  @Column("int", { name: "pc_best_reserve", default: () => "'0'" })
  pcBestReserve: number;

  @Column("enum", {
    name: "pc_best_select",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pcBestSelect: "" | "Y" | "N";

  @Column("varchar", { name: "pc_image_pc", length: 100 })
  pcImagePc: string;

  @Column("varchar", { name: "pc_image_mobile", length: 100 })
  pcImageMobile: string;

  @Column("varchar", { name: "pc_list_image", length: 100 })
  pcListImage: string;

  @Column("varchar", { name: "pc_image_close_pc", length: 100 })
  pcImageClosePc: string;

  @Column("varchar", { name: "pc_image_close_mobile", length: 100 })
  pcImageCloseMobile: string;

  @Column("varchar", { name: "pc_content", length: 255 })
  pcContent: string;

  @Column("int", { name: "pc_dp_num", default: () => "'0'" })
  pcDpNum: number;

  @Column("datetime", {
    name: "pc_wrt_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pcWrtDate: Date;
}
