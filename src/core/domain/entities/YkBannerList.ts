import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("yk_banner_list", { schema: "makeshop" })
export class YkBannerList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "title", length: 100 })
  title: string;

  @Column("varchar", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date | null;

  @Column("varchar", { name: "sub_id", length: 20 })
  subId: string;

  @Column("enum", { name: "use_yn", nullable: true, enum: ["", "Y", "N"] })
  useYn: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "apply_data", nullable: true })
  applyData: string | null;
}
