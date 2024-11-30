import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_fb_uid", ["fbUid"], {})
@Entity("fc_banner", { schema: "makeshop" })
export class FcBanner {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "fb_uid", unsigned: true })
  fbUid: number;

  @Column("varchar", { name: "fb_image", length: 255 })
  fbImage: string;

  @Column("varchar", { name: "fb_link", length: 255 })
  fbLink: string;

  @Column("mediumint", {
    name: "fb_sort",
    unsigned: true,
    default: () => "'0'",
  })
  fbSort: number;

  @Column("datetime", {
    name: "fb_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  fbRegdate: Date;
}
