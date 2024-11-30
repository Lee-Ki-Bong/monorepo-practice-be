import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pid", ["pid"], {})
@Entity("discount_promotion", { schema: "makeshop" })
export class DiscountPromotion {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pid", unsigned: true })
  pid: number;

  @Column("enum", {
    primary: true,
    name: "dp_type",
    enum: ["", "BULK"],
    default: () => "'BULK'",
  })
  dpType: "" | "BULK";

  @Column("enum", {
    name: "dp_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  dpStatus: "" | "Y" | "N";

  @Column("varchar", { name: "dp_name", length: 255 })
  dpName: string;

  @Column("datetime", {
    name: "dp_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  dpStartDate: Date;

  @Column("datetime", {
    name: "dp_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  dpEndDate: Date;

  @Column("set", {
    name: "dp_device",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  dpDevice: ("PC" | "MOBILE" | "APP")[];

  @Column("set", {
    name: "dp_user_type",
    enum: ["ALL", "MEMBER"],
    default: () => ["ALL"],
  })
  dpUserType: ("ALL" | "MEMBER")[];

  @Column("enum", {
    name: "dp_group_benefit",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  dpGroupBenefit: "" | "Y" | "N";

  @Column("enum", {
    name: "dp_reserve",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  dpReserve: "" | "Y" | "N";

  @Column("enum", {
    name: "dp_coupon",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  dpCoupon: "" | "Y" | "N";

  @Column("enum", {
    name: "dp_bulk_type",
    enum: ["", "ONCE", "ALL"],
    default: () => "'ALL'",
  })
  dpBulkType: "" | "ONCE" | "ALL";

  @Column("enum", {
    name: "dp_discount_type",
    enum: ["", "WON", "PERCENT"],
    default: () => "'WON'",
  })
  dpDiscountType: "" | "WON" | "PERCENT";

  @Column("smallint", {
    name: "dp_discount_trim_unit",
    nullable: true,
    default: () => "'0'",
  })
  dpDiscountTrimUnit: number | null;

  @Column("enum", {
    name: "dp_discount_trim_type",
    nullable: true,
    enum: ["", "ceil", "floor", "round"],
    default: () => "'ceil'",
  })
  dpDiscountTrimType: "" | "ceil" | "floor" | "round" | null;

  @Column("enum", {
    name: "dp_option_apply",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  dpOptionApply: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "dp_discount_info", nullable: true })
  dpDiscountInfo: string | null;

  @Column("varchar", { name: "dp_pc_icon", nullable: true, length: 255 })
  dpPcIcon: string | null;

  @Column("varchar", { name: "dp_mobile_icon", nullable: true, length: 255 })
  dpMobileIcon: string | null;

  @Column("enum", {
    name: "dp_pc_icon_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  dpPcIconDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "dp_mobile_icon_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  dpMobileIconDisplay: "" | "Y" | "N";

  @Column("mediumtext", { name: "dp_etctype", nullable: true })
  dpEtctype: string | null;

  @Column("datetime", {
    name: "dp_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  dpRegDate: Date;

  @Column("datetime", {
    name: "dp_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  dpModDate: Date;
}
