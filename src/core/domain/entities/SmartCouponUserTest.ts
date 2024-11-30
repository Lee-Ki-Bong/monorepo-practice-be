import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_scu_idx", ["scuIdx"], {})
@Index("idx_issue_date", ["adminuser", "couponnum", "scuIssueDate"], {})
@Index("idx_use_end_date", ["adminuser", "couponnum", "scuEndDate"], {})
@Index("idx_used_date", ["adminuser", "couponnum", "scuUsedDate"], {})
@Index("index_sel_idx", ["adminuser", "scuSelIdx", "couponnum"], {})
@Index("index_user_id", ["adminuser", "userId"], {})
@Index("scu_used", ["adminuser", "couponnum", "scuUsed"], {})
@Entity("smart_coupon_user_test", { schema: "makeshop" })
export class SmartCouponUserTest {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("varchar", { primary: true, name: "user_id", length: 40 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "scu_idx", unsigned: true })
  scuIdx: number;

  @Column("datetime", {
    name: "scu_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scuStartDate: Date;

  @Column("datetime", {
    name: "scu_end_date",
    default: () => "'2999-12-31 23:59:59'",
  })
  scuEndDate: Date;

  @Column("enum", {
    name: "scu_used",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scuUsed: "" | "Y" | "N";

  @Column("varchar", { name: "scu_used_ordernum", length: 26 })
  scuUsedOrdernum: string;

  @Column("int", {
    name: "scu_used_basketnum",
    unsigned: true,
    default: () => "'0'",
  })
  scuUsedBasketnum: number;

  @Column("varchar", {
    name: "scu_issue_type",
    length: 10,
    default: () => "'DOWN'",
  })
  scuIssueType: string;

  @Column("enum", {
    name: "scu_issue_device",
    enum: ["", "PC", "MOBILE", "APP"],
    default: () => "'PC'",
  })
  scuIssueDevice: "" | "PC" | "MOBILE" | "APP";

  @Column("varchar", {
    name: "scu_issue_page",
    length: 10,
    default: () => "'MYPAGE'",
  })
  scuIssuePage: string;

  @Column("varchar", { name: "scu_issue_referer", length: 255 })
  scuIssueReferer: string;

  @Column("int", { name: "scu_sel_idx", unsigned: true, default: () => "'0'" })
  scuSelIdx: number;

  @Column("varchar", { name: "scu_issue_serial", length: 40 })
  scuIssueSerial: string;

  @Column("varchar", { name: "scu_issue_ordernum", length: 26 })
  scuIssueOrdernum: string;

  @Column("varchar", { name: "scu_issue_basketnum", length: 255 })
  scuIssueBasketnum: string;

  @Column("varchar", { name: "scu_issue_sub_id", length: 12 })
  scuIssueSubId: string;

  @Column("enum", {
    name: "scu_issue_sms",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scuIssueSms: "" | "Y" | "N";

  @Column("enum", {
    name: "scu_expire_sms",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scuExpireSms: "" | "Y" | "N";

  @Column("datetime", {
    name: "scu_issue_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scuIssueDate: Date;

  @Column("datetime", {
    name: "scu_used_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scuUsedDate: Date;

  @Column("datetime", {
    name: "scu_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  scuModDate: Date;
}
