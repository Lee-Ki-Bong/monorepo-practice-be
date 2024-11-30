import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_plan_banner_idx", ["planBannerIdx"], {})
@Index("index_del", ["adminuser", "isDel"], {})
@Entity("neodesign_plan_banner", { schema: "makeshop" })
export class NeodesignPlanBanner {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({
    type: "int",
    name: "plan_banner_idx",
    unsigned: true,
  })
  planBannerIdx: number;

  @Column("int", { name: "plan_id", unsigned: true, default: () => "'0'" })
  planId: number;

  @Column("int", {
    name: "plan_cate_idx",
    unsigned: true,
    default: () => "'0'",
  })
  planCateIdx: number;

  @Column("varchar", { name: "plan_banner_img", length: 255 })
  planBannerImg: string;

  @Column("varchar", { name: "plan_banner_img_mo", length: 255 })
  planBannerImgMo: string;

  @Column("varchar", { name: "plan_banner_alt", nullable: true, length: 255 })
  planBannerAlt: string | null;

  @Column("enum", {
    name: "is_del",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isDel: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date | null;
}
