import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_mph_uid", ["mphUid"], {})
@Index("mph_date", ["adminuser", "mphDate", "mphPrdUid", "mphStoId"], {})
@Index("mph_list", ["adminuser", "mphPrdUid", "mphStoId", "mphUid"], {})
@Index("mph_prd_uid", ["adminuser", "mphPrdUid", "mphStoId", "mphDate"], {})
@Entity("monami_prd_history", { schema: "makeshop" })
export class MonamiPrdHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "mph_uid", unsigned: true })
  mphUid: number;

  @Column("datetime", {
    name: "mph_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mphDate: Date;

  @Column("int", { name: "mph_prd_uid", unsigned: true, default: () => "'1'" })
  mphPrdUid: number;

  @Column("varchar", { name: "mph_sto_id", length: 14, default: () => "'1'" })
  mphStoId: string;

  @Column("varchar", { name: "mph_if_id", length: 15 })
  mphIfId: string;

  @Column("varchar", { name: "mph_item_cd", length: 18 })
  mphItemCd: string;

  @Column("int", { name: "mph_before_qty", default: () => "'0'" })
  mphBeforeQty: number;

  @Column("int", { name: "mph_mdf_qty", default: () => "'0'" })
  mphMdfQty: number;

  @Column("varchar", { name: "mph_trans_gbn", length: 6 })
  mphTransGbn: string;

  @Column("varchar", { name: "mph_trans_no", length: 26 })
  mphTransNo: string;

  @Column("varchar", { name: "mph_admin_id", length: 12 })
  mphAdminId: string;

  @Column("varchar", { name: "mph_admin_name", length: 30 })
  mphAdminName: string;
}
