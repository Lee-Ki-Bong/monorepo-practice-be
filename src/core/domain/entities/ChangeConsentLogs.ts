import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "ccl_regdate",
  ["cclAdminuser", "cclAction", "cclTarget", "cclRegdate"],
  {}
)
@Index("idx_auto_ccl_uid", ["cclUid"], {})
@Entity("change_consent_logs", { schema: "makeshop" })
export class ChangeConsentLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "ccl_uid", unsigned: true })
  cclUid: number;

  @Column("varchar", { primary: true, name: "ccl_adminuser", length: 12 })
  cclAdminuser: string;

  @Column("varchar", { name: "ccl_sub_id", nullable: true, length: 12 })
  cclSubId: string | null;

  @Column("varchar", { name: "ccl_md_id", nullable: true, length: 12 })
  cclMdId: string | null;

  @Column("varchar", { name: "ccl_submd_id", nullable: true, length: 12 })
  cclSubmdId: string | null;

  @Column("char", { name: "ccl_action", length: 3 })
  cclAction: string;

  @Column("char", { name: "ccl_target", length: 3 })
  cclTarget: string;

  @Column("varchar", { name: "ccl_target_id", length: 25 })
  cclTargetId: string;

  @Column("varchar", { name: "ccl_target_new", length: 25 })
  cclTargetNew: string;

  @Column("varchar", { name: "ccl_prev", nullable: true, length: 25 })
  cclPrev: string | null;

  @Column("varchar", { name: "ccl_next", nullable: true, length: 25 })
  cclNext: string | null;

  @Column("varchar", { name: "ccl_path", length: 200 })
  cclPath: string;

  @Column("int", { name: "ccl_ip", unsigned: true, default: () => "'0'" })
  cclIp: number;

  @Column("datetime", {
    name: "ccl_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  cclRegdate: Date;
}
