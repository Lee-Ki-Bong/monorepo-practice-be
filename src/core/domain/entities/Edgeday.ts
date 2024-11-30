import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_ed_id", ["edId"], {})
@Entity("edgeday", { schema: "makeshop" })
export class Edgeday {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ed_id", unsigned: true })
  edId: number;

  @Column("datetime", {
    name: "ed_start",
    default: () => "'0000-00-00 00:00:00'",
  })
  edStart: Date;

  @Column("datetime", {
    name: "ed_end",
    default: () => "'0000-00-00 00:00:00'",
  })
  edEnd: Date;

  @Column("enum", {
    name: "ed_status",
    enum: ["", "READY", "DOING", "END", "CLOSE"],
    default: () => "'READY'",
  })
  edStatus: "" | "READY" | "DOING" | "END" | "CLOSE";

  @Column("varchar", { name: "ed_coupon_code", length: 8 })
  edCouponCode: string;

  @Column("enum", {
    name: "ed_coupon_issue",
    enum: ["", "MANUAL", "DIRECTLY", "AUTO"],
    default: () => "'MANUAL'",
  })
  edCouponIssue: "" | "MANUAL" | "DIRECTLY" | "AUTO";

  @Column("datetime", {
    name: "ed_register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  edRegisterDate: Date;

  @Column("varchar", { name: "ed_title", length: 100 })
  edTitle: string;

  @Column("enum", {
    name: "ed_ordcntchk_type",
    enum: ["", "NONE", "PRECNT", "LASTCNT"],
    default: () => "'NONE'",
  })
  edOrdcntchkType: "" | "NONE" | "PRECNT" | "LASTCNT";

  @Column("mediumint", {
    name: "ed_minjoin",
    unsigned: true,
    default: () => "'0'",
  })
  edMinjoin: number;

  @Column("mediumint", {
    name: "ed_personal_limit",
    unsigned: true,
    default: () => "'0'",
  })
  edPersonalLimit: number;

  @Column("enum", {
    name: "ed_sellcnt_type",
    enum: ["", "REAL", "PER", "PLUS"],
    default: () => "'REAL'",
  })
  edSellcntType: "" | "REAL" | "PER" | "PLUS";

  @Column("mediumint", {
    name: "ed_sellcnt_data",
    unsigned: true,
    default: () => "'0'",
  })
  edSellcntData: number;

  @Column("int", {
    name: "ed_common_price",
    unsigned: true,
    default: () => "'0'",
  })
  edCommonPrice: number;

  @Column("enum", {
    name: "ed_dcrate_type",
    enum: ["", "PER", "WON"],
    default: () => "'PER'",
  })
  edDcrateType: "" | "PER" | "WON";

  @Column("mediumint", {
    name: "ed_dcrate",
    unsigned: true,
    default: () => "'0'",
  })
  edDcrate: number;

  @Column("int", { name: "ed_sellprice", unsigned: true, default: () => "'0'" })
  edSellprice: number;

  @Column("set", {
    name: "ed_paymethod",
    enum: ["CARD", "REALBANK", "HPHONE"],
    default: () => ["CARD"],
  })
  edPaymethod: ("CARD" | "REALBANK" | "HPHONE")[];

  @Column("enum", {
    name: "ed_design_type",
    enum: ["", "SKIN", "FREE"],
    default: () => "'SKIN'",
  })
  edDesignType: "" | "SKIN" | "FREE";

  @Column("varchar", { name: "ed_event_title", length: 50 })
  edEventTitle: string;

  @Column("varchar", { name: "ed_event_subtitle", length: 200 })
  edEventSubtitle: string;

  @Column("varchar", { name: "ed_event_titleimg", length: 20 })
  edEventTitleimg: string;

  @Column("enum", {
    name: "ed_layout_type",
    enum: ["", "BASIC", "ONEPAGE"],
    default: () => "'BASIC'",
  })
  edLayoutType: "" | "BASIC" | "ONEPAGE";

  @Column("int", {
    name: "ed_join_count",
    unsigned: true,
    default: () => "'0'",
  })
  edJoinCount: number;

  @Column("enum", {
    name: "ed_coupon_status",
    enum: ["", "NONE", "DONE"],
    default: () => "'NONE'",
  })
  edCouponStatus: "" | "NONE" | "DONE";

  @Column("enum", {
    name: "ed_sms",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  edSms: "" | "YES" | "NO";

  @Column("smallint", { name: "ed_maxjoin", nullable: true })
  edMaxjoin: number | null;

  @Column("varchar", { name: "ed_coupon_admin_id", nullable: true, length: 12 })
  edCouponAdminId: string | null;

  @Column("datetime", { name: "ed_coupon_date", nullable: true })
  edCouponDate: Date | null;

  @Column("mediumtext", { name: "ed_event_detail", nullable: true })
  edEventDetail: string | null;

  @Column("mediumtext", { name: "ed_design", nullable: true })
  edDesign: string | null;

  @Column("mediumtext", { name: "ed_design_top", nullable: true })
  edDesignTop: string | null;

  @Column("mediumtext", { name: "ed_design_bottom", nullable: true })
  edDesignBottom: string | null;

  @Column("enum", {
    name: "ed_access_type",
    enum: ["", "NONE", "GROUP", "GRADE"],
    default: () => "'NONE'",
  })
  edAccessType: "" | "NONE" | "GROUP" | "GRADE";

  @Column("varchar", { name: "ed_access_data", nullable: true, length: 4 })
  edAccessData: string | null;
}
