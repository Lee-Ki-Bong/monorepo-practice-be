import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("status", ["adminuser", "status"], {})
@Entity("recommend_md_list", { schema: "makeshop" })
export class RecommendMdList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("enum", {
    name: "reg_type",
    nullable: true,
    enum: ["", "MAIN", "BRAND"],
    default: () => "'MAIN'",
  })
  regType: "" | "MAIN" | "BRAND" | null;

  @Column("varchar", { name: "title", length: 50 })
  title: string;

  @Column("int", {
    name: "brand_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  brandId: number | null;

  @Column("int", {
    name: "brand_mid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  brandMid: number | null;

  @Column("int", {
    name: "brand_sid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  brandSid: number | null;

  @Column("varchar", { name: "logo_url", nullable: true, length: 255 })
  logoUrl: string | null;

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

  @Column("varchar", { name: "reg_id", nullable: true, length: 12 })
  regId: string | null;

  @Column("enum", { name: "status", nullable: true, enum: ["", "Y", "W", "N"] })
  status: "" | "Y" | "W" | "N" | null;

  @Column("int", {
    name: "set_order",
    nullable: true,
    unsigned: true,
    default: () => "'99999'",
  })
  setOrder: number | null;
}
