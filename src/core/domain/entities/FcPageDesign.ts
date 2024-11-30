import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("fc_page_design", { schema: "makeshop" })
export class FcPageDesign {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("enum", {
    name: "use_design",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useDesign: "" | "Y" | "N";

  @Column("varchar", { name: "design_text", length: 20 })
  designText: string;

  @Column("varchar", { name: "main_banner_img", length: 255 })
  mainBannerImg: string;

  @Column("text", { name: "main_banner_link" })
  mainBannerLink: string;

  @Column("enum", {
    name: "main_banner_link_set",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mainBannerLinkSet: "" | "Y" | "N";

  @Column("varchar", {
    name: "btn_design",
    length: 6,
    default: () => "'1266FF'",
  })
  btnDesign: string;

  @Column("varchar", { name: "roll_banner_img1", length: 255 })
  rollBannerImg1: string;

  @Column("text", { name: "roll_banner_link1" })
  rollBannerLink1: string;

  @Column("enum", {
    name: "roll_banner_link_set1",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rollBannerLinkSet1: "" | "Y" | "N";

  @Column("varchar", { name: "roll_banner_img2", length: 255 })
  rollBannerImg2: string;

  @Column("text", { name: "roll_banner_link2" })
  rollBannerLink2: string;

  @Column("enum", {
    name: "roll_banner_link_set2",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rollBannerLinkSet2: "" | "Y" | "N";
}
