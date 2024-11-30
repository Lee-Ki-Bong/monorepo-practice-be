import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_mph_uid", ["mphUid"], {})
@Index("mph_prd", ["adminuser", "mphPrdUid", "mphStoId"], { unique: true })
@Entity("tmp_monami_prd_history", { schema: "makeshop" })
export class TmpMonamiPrdHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 13 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "mph_uid", unsigned: true })
  mphUid: number;

  @Column("int", { name: "mph_prd_uid", unsigned: true, default: () => "'1'" })
  mphPrdUid: number;

  @Column("int", { name: "mph_sto_id", unsigned: true, default: () => "'1'" })
  mphStoId: number;

  @Column("longtext", { name: "mph_history", nullable: true })
  mphHistory: string | null;
}
