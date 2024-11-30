import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("premiumbeecon_banner", { schema: "makeshop" })
export class PremiumbeeconBanner {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("enum", {
    name: "is_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "apply_target",
    enum: ["", "MEMBER", "GUEST"],
    default: () => "'GUEST'",
  })
  applyTarget: "" | "MEMBER" | "GUEST";

  @Column("varchar", { name: "apply_group_code", nullable: true, length: 20 })
  applyGroupCode: string | null;

  @Column("varchar", { name: "banner_code", nullable: true, length: 10 })
  bannerCode: string | null;

  @Column("varchar", { name: "user_banner_images", nullable: true, length: 20 })
  userBannerImages: string | null;

  @Column("char", { name: "position_0", nullable: true, length: 1 })
  position_0: string | null;

  @Column("char", { name: "position_1", nullable: true, length: 1 })
  position_1: string | null;

  @Column("char", { name: "position_2", nullable: true, length: 1 })
  position_2: string | null;

  @Column("char", { name: "position_3", nullable: true, length: 1 })
  position_3: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
