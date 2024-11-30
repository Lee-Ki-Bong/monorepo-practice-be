import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_oi_uid", ["oiUid"], {})
@Entity("ordersheet_image", { schema: "makeshop" })
export class OrdersheetImage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "oi_uid", unsigned: true })
  oiUid: number;

  @Column("enum", {
    name: "oi_type",
    nullable: true,
    enum: ["", "TOP", "BOTTOM"],
  })
  oiType: "" | "TOP" | "BOTTOM" | null;

  @Column("smallint", { name: "oi_sort", unsigned: true, default: () => "'0'" })
  oiSort: number;

  @Column("varchar", { name: "oi_image_name", length: 255 })
  oiImageName: string;

  @Column("varchar", { name: "oi_real_name", length: 255 })
  oiRealName: string;

  @Column("varchar", { name: "oi_image_path", nullable: true, length: 255 })
  oiImagePath: string | null;

  @Column("enum", {
    name: "oi_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  oiDisplay: "" | "Y" | "N";

  @Column("datetime", {
    name: "oi_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  oiModDate: Date;
}
