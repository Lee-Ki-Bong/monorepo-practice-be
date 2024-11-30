import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sca_idx", ["scaIdx"], {})
@Entity("smart_coupon_auto", { schema: "makeshop" })
export class SmartCouponAuto {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("varchar", { primary: true, name: "user_id", length: 40 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "sca_idx", unsigned: true })
  scaIdx: number;

  @Column("enum", {
    name: "sca_status",
    enum: ["", "S", "C"],
    default: () => "'S'",
  })
  scaStatus: "" | "S" | "C";

  @Column("varchar", { name: "sca_type", length: 10 })
  scaType: string;

  @Column("date", { name: "sca_issue_date", default: () => "'0000-00-00'" })
  scaIssueDate: string;

  @Column("smallint", {
    name: "sca_issue_time",
    unsigned: true,
    default: () => "'9'",
  })
  scaIssueTime: number;

  @Column("varchar", { name: "sca_ordernum", length: 26 })
  scaOrdernum: string;

  @Column("varchar", { name: "sca_basketnums", length: 255 })
  scaBasketnums: string;

  @Column("datetime", {
    name: "sca_cancel_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scaCancelDate: Date;

  @Column("varchar", { name: "sca_cancel_comment", length: 255 })
  scaCancelComment: string;

  @Column("varchar", { name: "sca_cancel_sub_id", length: 12 })
  scaCancelSubId: string;

  @Column("datetime", {
    name: "sca_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  scaRegdate: Date;
}
