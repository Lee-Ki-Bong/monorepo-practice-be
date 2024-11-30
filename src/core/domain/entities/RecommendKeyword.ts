import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("recommend_keyword", { schema: "makeshop" })
export class RecommendKeyword {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "display_pos", length: 10 })
  displayPos: string;

  @Column("varchar", { name: "use_device", nullable: true, length: 5 })
  useDevice: string | null;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N";

  @Column("varchar", { name: "keyword", nullable: true, length: 15 })
  keyword: string | null;

  @Column("varchar", { name: "img_name", nullable: true, length: 50 })
  imgName: string | null;

  @Column("varchar", { name: "img_path", nullable: true, length: 255 })
  imgPath: string | null;

  @Column("smallint", { name: "pc_window", nullable: true, unsigned: true })
  pcWindow: number | null;

  @Column("varchar", { name: "pc_url", nullable: true, length: 100 })
  pcUrl: string | null;

  @Column("smallint", { name: "mo_window", nullable: true, unsigned: true })
  moWindow: number | null;

  @Column("varchar", { name: "mo_url", nullable: true, length: 100 })
  moUrl: string | null;

  @Column("smallint", {
    name: "date_type",
    unsigned: true,
    default: () => "'0'",
  })
  dateType: number;

  @Column("datetime", { name: "sdate", nullable: true })
  sdate: Date | null;

  @Column("datetime", { name: "edate", nullable: true })
  edate: Date | null;

  @Column("char", { name: "pc_rank", nullable: true, length: 2 })
  pcRank: string | null;

  @Column("char", { name: "mo_rank", nullable: true, length: 2 })
  moRank: string | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;

  @Column("datetime", { name: "mod_date", nullable: true })
  modDate: Date | null;

  @Column("varchar", { name: "reg_admin_id", length: 12 })
  regAdminId: string;
}
