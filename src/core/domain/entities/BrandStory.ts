import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_bs_uid", ["bsUid"], {})
@Index("unky", ["adminuser", "bsUid"], { unique: true })
@Entity("brand_story", { schema: "makeshop" })
export class BrandStory {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("int", { name: "brand_id", unsigned: true, default: () => "'0'" })
  brandId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "bs_uid", unsigned: true })
  bsUid: number;

  @Column("varchar", { name: "bs_url", length: 255 })
  bsUrl: string;

  @Column("varchar", { name: "bs_subject", length: 255 })
  bsSubject: string;

  @Column("longtext", { name: "bs_content" })
  bsContent: string;

  @Column("varchar", { name: "bs_image", length: 255 })
  bsImage: string;

  @Column("varchar", { name: "bs_m_image", length: 255 })
  bsMImage: string;

  @Column("enum", {
    name: "bs_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  bsDisplay: "" | "Y" | "N";

  @Column("datetime", {
    name: "bs_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  bsRegDate: Date;
}
