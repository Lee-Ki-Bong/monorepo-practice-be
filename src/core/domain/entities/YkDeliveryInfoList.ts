import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("yk_delivery_info_list", { schema: "makeshop" })
export class YkDeliveryInfoList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("char", { name: "role", length: 2 })
  role: string;

  @Column("smallint", { name: "role_cd", nullable: true, unsigned: true })
  roleCd: number | null;

  @Column("varchar", { name: "title", length: 100 })
  title: string;

  @Column("varchar", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @Column("smallint", { name: "deli_cd", unsigned: true, default: () => "'0'" })
  deliCd: number;

  @Column("varchar", { name: "deli_text", length: 200 })
  deliText: string;

  @Column("varchar", { name: "deli_detail", nullable: true, length: 200 })
  deliDetail: string | null;

  @Column("smallint", {
    name: "date_type",
    unsigned: true,
    default: () => "'0'",
  })
  dateType: number;

  @Column("datetime", { name: "start_date", nullable: true })
  startDate: Date | null;

  @Column("datetime", { name: "end_date", nullable: true })
  endDate: Date | null;

  @Column("varchar", { name: "icon", nullable: true, length: 150 })
  icon: string | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;

  @Column("datetime", { name: "mod_date", nullable: true })
  modDate: Date | null;

  @Column("varchar", { name: "sub_id", length: 20 })
  subId: string;

  @Column("enum", { name: "use_yn", nullable: true, enum: ["", "Y", "N"] })
  useYn: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "apply_data", nullable: true })
  applyData: string | null;
}
