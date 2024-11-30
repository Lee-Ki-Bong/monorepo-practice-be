import { Column, Entity } from "typeorm";

@Entity("powerapp_history", { schema: "makeshop" })
export class PowerappHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "history_date",
    default: () => "'0000-00-00'",
  })
  historyDate: string;

  @Column("int", { name: "app_install", unsigned: true, default: () => "'0'" })
  appInstall: number;

  @Column("int", {
    name: "app_install_ios",
    unsigned: true,
    default: () => "'0'",
  })
  appInstallIos: number;

  @Column("int", {
    name: "app_install_android",
    unsigned: true,
    default: () => "'0'",
  })
  appInstallAndroid: number;

  @Column("int", { name: "app_delete", unsigned: true, default: () => "'0'" })
  appDelete: number;

  @Column("int", {
    name: "app_delete_ios",
    unsigned: true,
    default: () => "'0'",
  })
  appDeleteIos: number;

  @Column("int", {
    name: "app_delete_android",
    unsigned: true,
    default: () => "'0'",
  })
  appDeleteAndroid: number;

  @Column("int", {
    name: "app_push_count",
    unsigned: true,
    default: () => "'0'",
  })
  appPushCount: number;

  @Column("int", {
    name: "app_push_lms_count",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  appPushLmsCount: number | null;

  @Column("int", { name: "app_order", unsigned: true, default: () => "'0'" })
  appOrder: number;

  @Column("int", {
    name: "app_order_pay",
    unsigned: true,
    default: () => "'0'",
  })
  appOrderPay: number;

  @Column("int", { name: "app_discount", unsigned: true, default: () => "'0'" })
  appDiscount: number;

  @Column("int", {
    name: "app_discount_reserve",
    unsigned: true,
    default: () => "'0'",
  })
  appDiscountReserve: number;

  @Column("int", { name: "app_reserve", unsigned: true, default: () => "'0'" })
  appReserve: number;

  @Column("int", {
    name: "app_reserve_down",
    unsigned: true,
    default: () => "'0'",
  })
  appReserveDown: number;

  @Column("int", {
    name: "app_reserve_recommend",
    unsigned: true,
    default: () => "'0'",
  })
  appReserveRecommend: number;

  @Column("int", {
    name: "app_reserve_push",
    unsigned: true,
    default: () => "'0'",
  })
  appReservePush: number;

  @Column("int", { name: "app_coupon", unsigned: true, default: () => "'0'" })
  appCoupon: number;

  @Column("int", {
    name: "app_coupon_down",
    unsigned: true,
    default: () => "'0'",
  })
  appCouponDown: number;

  @Column("int", {
    name: "app_coupon_recommend",
    unsigned: true,
    default: () => "'0'",
  })
  appCouponRecommend: number;

  @Column("int", {
    name: "app_coupon_push",
    unsigned: true,
    default: () => "'0'",
  })
  appCouponPush: number;

  @Column("int", { name: "app_point", unsigned: true, default: () => "'0'" })
  appPoint: number;

  @Column("int", {
    name: "app_point_down",
    unsigned: true,
    default: () => "'0'",
  })
  appPointDown: number;

  @Column("int", {
    name: "app_point_recommend",
    unsigned: true,
    default: () => "'0'",
  })
  appPointRecommend: number;

  @Column("int", {
    name: "app_point_push",
    unsigned: true,
    default: () => "'0'",
  })
  appPointPush: number;

  @Column("int", { name: "app_join", unsigned: true, default: () => "'0'" })
  appJoin: number;

  @Column("int", { name: "app_join_ios", unsigned: true, default: () => "'0'" })
  appJoinIos: number;

  @Column("int", {
    name: "app_join_android",
    unsigned: true,
    default: () => "'0'",
  })
  appJoinAndroid: number;

  @Column("int", { name: "app_access", unsigned: true, default: () => "'0'" })
  appAccess: number;

  @Column("int", {
    name: "app_access_ios",
    unsigned: true,
    default: () => "'0'",
  })
  appAccessIos: number;

  @Column("int", {
    name: "app_access_android",
    unsigned: true,
    default: () => "'0'",
  })
  appAccessAndroid: number;

  @Column("int", {
    name: "app_recommend",
    unsigned: true,
    default: () => "'0'",
  })
  appRecommend: number;

  @Column("int", { name: "app_invite", unsigned: true, default: () => "'0'" })
  appInvite: number;

  @Column("int", { name: "app_total_download", nullable: true, unsigned: true })
  appTotalDownload: number | null;

  @Column("int", { name: "app_now_use", nullable: true, unsigned: true })
  appNowUse: number | null;
}
