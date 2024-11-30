import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_sel_idx", ["selIdx"], {})
@Entity("smart_coupon_serial_list", { schema: "makeshop" })
export class SmartCouponSerialList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "sel_idx", unsigned: true })
  selIdx: number;

  @Column("varchar", { name: "sel_name", length: 255 })
  selName: string;

  @Column("datetime", {
    name: "sel_reg_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  selRegStartDate: Date;

  @Column("datetime", {
    name: "sel_reg_end_date",
    default: () => "'2999-12-31 23:59:59'",
  })
  selRegEndDate: Date;

  @Column("set", {
    name: "sel_use_week",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    default: () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  })
  selUseWeek: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[];

  @Column("varchar", { name: "sel_member_group", length: 255 })
  selMemberGroup: string;

  @Column("set", {
    name: "sel_use_device",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  selUseDevice: ("PC" | "MOBILE" | "APP")[];

  @Column("enum", {
    name: "sel_type",
    enum: ["", "R", "F"],
    default: () => "'R'",
  })
  selType: "" | "R" | "F";

  @Column("varchar", { name: "sel_fix_code", length: 40 })
  selFixCode: string;

  @Column("int", {
    name: "sel_issue_amount",
    unsigned: true,
    default: () => "'0'",
  })
  selIssueAmount: number;

  @Column("int", {
    name: "sel_issue_limit",
    unsigned: true,
    default: () => "'0'",
  })
  selIssueLimit: number;

  @Column("enum", {
    name: "sel_benefit",
    nullable: true,
    enum: ["", "COUPON", "RESERVE", "EMONEY"],
    default: () => "'COUPON'",
  })
  selBenefit: "" | "COUPON" | "RESERVE" | "EMONEY" | null;

  @Column("mediumint", {
    name: "sel_dup_limit",
    unsigned: true,
    default: () => "'1'",
  })
  selDupLimit: number;

  @Column("enum", {
    name: "sel_status",
    nullable: true,
    enum: ["", "P", "R", "A", "S", "E"],
    default: () => "'A'",
  })
  selStatus: "" | "P" | "R" | "A" | "S" | "E" | null;

  @Column("int", {
    name: "sel_reserve_price",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  selReservePrice: number | null;

  @Column("int", {
    name: "sel_emoney_price",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  selEmoneyPrice: number | null;

  @Column("int", { name: "reserve_cid", unsigned: true, default: () => "'0'" })
  reserveCid: number;

  @Column("varchar", { name: "sel_etc", length: 255 })
  selEtc: string;

  @Column("datetime", {
    name: "sel_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  selRegDate: Date;

  @Column("datetime", {
    name: "sel_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  selModDate: Date;

  @Column("varchar", { name: "sel_old_couponnum", length: 20 })
  selOldCouponnum: string;
}
