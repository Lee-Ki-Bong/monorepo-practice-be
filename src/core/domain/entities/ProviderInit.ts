import { Column, Entity, Index } from "typeorm";

@Index("id", ["adminuser"], {})
@Entity("provider_init", { schema: "makeshop" })
export class ProviderInit {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("mediumint", {
    name: "pvd_ini_limit",
    unsigned: true,
    default: () => "'3'",
  })
  pvdIniLimit: number;

  @Column("enum", {
    name: "pvd_ini_auth",
    enum: ["", "AUTO", "MANUAL"],
    default: () => "'MANUAL'",
  })
  pvdIniAuth: "" | "AUTO" | "MANUAL";

  @Column("mediumint", {
    name: "pvd_ini_productnum",
    unsigned: true,
    default: () => "'50'",
  })
  pvdIniProductnum: number;

  @Column("int", {
    name: "pvd_ini_adminnum",
    nullable: true,
    default: () => "'0'",
  })
  pvdIniAdminnum: number | null;

  @Column("mediumint", {
    name: "pvd_ini_charge",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  pvdIniCharge: number | null;

  @Column("varchar", {
    name: "pvd_ini_product_auth",
    nullable: true,
    length: 220,
  })
  pvdIniProductAuth: string | null;

  @Column("mediumtext", {
    name: "pvd_ini_product_property_auth",
    nullable: true,
  })
  pvdIniProductPropertyAuth: string | null;

  @Column("varchar", {
    name: "pvd_ini_order_auth",
    nullable: true,
    length: 120,
  })
  pvdIniOrderAuth: string | null;

  @Column("varchar", {
    name: "pvd_ini_board_auth",
    nullable: true,
    length: 120,
  })
  pvdIniBoardAuth: string | null;

  @Column("varchar", {
    name: "pvd_ini_coupon_auth",
    nullable: true,
    length: 120,
  })
  pvdIniCouponAuth: string | null;

  @Column("enum", {
    name: "pvd_ini_checkout_order_auth",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pvdIniCheckoutOrderAuth: "" | "Y" | "N";

  @Column("int", {
    name: "pvd_ini_excel_form",
    unsigned: true,
    default: () => "'0'",
  })
  pvdIniExcelForm: number;

  @Column("enum", {
    name: "pvd_ini_burden",
    nullable: true,
    enum: ["", "SHOP", "PROVIDER"],
    default: () => "'SHOP'",
  })
  pvdIniBurden: "" | "SHOP" | "PROVIDER" | null;

  @Column("enum", {
    name: "pvd_ini_delivery",
    nullable: true,
    enum: ["", "SHOP", "PROVIDER"],
    default: () => "'SHOP'",
  })
  pvdIniDelivery: "" | "SHOP" | "PROVIDER" | null;

  @Column("enum", {
    name: "pvd_ini_gift",
    nullable: true,
    enum: ["", "SHOP", "PROVIDER"],
    default: () => "'SHOP'",
  })
  pvdIniGift: "" | "SHOP" | "PROVIDER" | null;

  @Column("mediumtext", { name: "pvd_ini_deli_area", nullable: true })
  pvdIniDeliArea: string | null;

  @Column("enum", {
    name: "pvd_ini_cal_type",
    enum: ["", "MONTH", "MONTH_TWICE", "WEEK"],
    default: () => "'MONTH'",
  })
  pvdIniCalType: "" | "MONTH" | "MONTH_TWICE" | "WEEK";

  @Column("char", {
    name: "pvd_ini_cal_period",
    length: 3,
    default: () => "'10'",
  })
  pvdIniCalPeriod: string;

  @Column("datetime", {
    name: "pvd_ini_cal_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pvdIniCalDate: Date;

  @Column("char", {
    name: "pvd_ini_adddeli",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  pvdIniAdddeli: string | null;

  @Column("varchar", {
    name: "pvd_ini_adddeli_time",
    nullable: true,
    length: 25,
  })
  pvdIniAdddeliTime: string | null;

  @Column("varchar", {
    name: "pvd_ini_adddeli_week",
    nullable: true,
    length: 100,
  })
  pvdIniAdddeliWeek: string | null;

  @Column("enum", {
    name: "pvd_ini_adddeli_type",
    nullable: true,
    enum: ["", "N", "H", "L"],
    default: () => "'N'",
  })
  pvdIniAdddeliType: "" | "N" | "H" | "L" | null;

  @Column("set", {
    name: "pvd_ini_adddeli_path",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  pvdIniAdddeliPath: ("PC" | "MOBILE" | "APP")[];

  @Column("enum", {
    name: "pvd_ini_adddeli_allfree",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pvdIniAdddeliAllfree: "" | "N" | "Y";

  @Column("enum", {
    name: "pvd_ini_adddeli_include",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pvdIniAdddeliInclude: "" | "N" | "Y";

  @Column("int", {
    name: "pvd_ini_delicom",
    unsigned: true,
    default: () => "'0'",
  })
  pvdIniDelicom: number;

  @Column("enum", {
    name: "pvd_ini_quick",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pvdIniQuick: "" | "N" | "Y";

  @Column("enum", {
    name: "pvd_ini_quick_price_type",
    enum: ["", "F", "C"],
    default: () => "'C'",
  })
  pvdIniQuickPriceType: "" | "F" | "C";

  @Column("int", {
    name: "pvd_ini_quick_price",
    unsigned: true,
    default: () => "'0'",
  })
  pvdIniQuickPrice: number;

  @Column("enum", {
    name: "pvd_ini_subs",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pvdIniSubs: "" | "N" | "Y";

  @Column("enum", {
    name: "pvd_ini_today_delivery",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pvdIniTodayDelivery: "" | "N" | "Y";

  @Column("smallint", {
    name: "pvd_ini_today_delivery_time",
    unsigned: true,
    default: () => "'16'",
  })
  pvdIniTodayDeliveryTime: number;

  @Column("set", {
    name: "pvd_ini_today_delivery_holiday",
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Holi"],
  })
  pvdIniTodayDeliveryHoliday: (
    | "Mon"
    | "Tue"
    | "Wed"
    | "Thu"
    | "Fri"
    | "Sat"
    | "Sun"
    | "Holi"
  )[];

  @Column("longtext", { name: "pvd_ini_today_delivery_holiday_date" })
  pvdIniTodayDeliveryHolidayDate: string;

  @Column("mediumtext", { name: "pvd_ini_remote_area_config", nullable: true })
  pvdIniRemoteAreaConfig: string | null;

  @Column("bigint", {
    name: "delivery_charge",
    unsigned: true,
    default: () => "'0'",
  })
  deliveryCharge: string;

  @Column("enum", {
    name: "delivery_charge_type",
    enum: ["", "F", "Y", "M", "M2", "S", "W"],
    default: () => "'F'",
  })
  deliveryChargeType: "" | "F" | "Y" | "M" | "M2" | "S" | "W";

  @Column("mediumtext", { name: "delivery_charge_condition", nullable: true })
  deliveryChargeCondition: string | null;

  @Column("datetime", { name: "moddate", nullable: true })
  moddate: Date | null;
}
