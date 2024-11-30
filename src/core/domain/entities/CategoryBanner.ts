import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cb_display", ["adminuser", "cbDisplay", "cbStartDate", "cbEndDate"], {})
@Index("cb_reg_date", ["adminuser", "cbRegDate"], {})
@Index("idx_auto_cb_uid", ["cbUid"], {})
@Entity("category_banner", { schema: "makeshop" })
export class CategoryBanner {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "cb_uid", unsigned: true })
  cbUid: number;

  @Column("varchar", { name: "cb_subject", length: 100 })
  cbSubject: string;

  @Column("varchar", { name: "cb_link_url", nullable: true, length: 255 })
  cbLinkUrl: string | null;

  @Column("datetime", {
    name: "cb_start_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  cbStartDate: Date | null;

  @Column("datetime", {
    name: "cb_end_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  cbEndDate: Date | null;

  @Column("varchar", { name: "cb_image", nullable: true, length: 255 })
  cbImage: string | null;

  @Column("varchar", { name: "cb_image_mobile", nullable: true, length: 255 })
  cbImageMobile: string | null;

  @Column("enum", {
    name: "cb_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  cbDisplay: "" | "Y" | "N";

  @Column("varchar", { name: "sub_id", nullable: true, length: 20 })
  subId: string | null;

  @Column("datetime", {
    name: "cb_reg_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  cbRegDate: Date | null;

  @Column("varchar", { name: "cb_alt_info", nullable: true, length: 100 })
  cbAltInfo: string | null;
}
