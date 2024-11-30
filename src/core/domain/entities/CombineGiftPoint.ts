import { Column, Entity, Index } from "typeorm";

@Index("admin_combine_date", ["adminuser", "combineDate"], {})
@Index("point_status", ["adminuser", "userId", "pointStatus"], {})
@Index("reg_mode", ["adminuser", "regMode"], {})
@Index("rest_point", ["adminuser", "userId", "restPoint"], {})
@Index("user_mobile", ["adminuser", "userMobile"], {})
@Index("user_name", ["adminuser", "userName"], {})
@Entity("combine_gift_point", { schema: "makeshop" })
export class CombineGiftPoint {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("int", {
    primary: true,
    name: "point_uid",
    unsigned: true,
    default: () => "'0'",
  })
  pointUid: number;

  @Column("varchar", {
    name: "reg_mode",
    length: 10,
    default: () => "'normal'",
  })
  regMode: string;

  @Column("varchar", { name: "user_name", length: 30 })
  userName: string;

  @Column("varchar", { name: "user_mobile", length: 20 })
  userMobile: string;

  @Column("varchar", { name: "user_address", length: 255 })
  userAddress: string;

  @Column("decimal", {
    name: "reg_point",
    precision: 10,
    scale: 1,
    default: () => "'0.0'",
  })
  regPoint: string;

  @Column("decimal", {
    name: "save_point",
    precision: 10,
    scale: 1,
    default: () => "'0.0'",
  })
  savePoint: string;

  @Column("decimal", {
    name: "over_point",
    precision: 10,
    scale: 1,
    default: () => "'0.0'",
  })
  overPoint: string;

  @Column("decimal", {
    name: "rest_point",
    precision: 10,
    scale: 1,
    default: () => "'0.0'",
  })
  restPoint: string;

  @Column("smallint", {
    name: "exchange_rate",
    unsigned: true,
    default: () => "'1'",
  })
  exchangeRate: number;

  @Column("varchar", { name: "baby_card", length: 30 })
  babyCard: string;

  @Column("smallint", {
    name: "baby_point_1",
    unsigned: true,
    default: () => "'0'",
  })
  babyPoint_1: number;

  @Column("smallint", {
    name: "baby_point_2",
    unsigned: true,
    default: () => "'0'",
  })
  babyPoint_2: number;

  @Column("enum", {
    name: "disabled_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  disabledType: "" | "Y" | "N";

  @Column("char", { name: "point_status", length: 1, default: () => "'N'" })
  pointStatus: string;

  @Column("mediumtext", { name: "point_content", nullable: true })
  pointContent: string | null;

  @Column("mediumtext", { name: "point_etctype", nullable: true })
  pointEtctype: string | null;

  @Column("varchar", { name: "reg_admin_id", length: 12 })
  regAdminId: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", { name: "mod_admin_id", length: 12 })
  modAdminId: string;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("varchar", { name: "after_user_id", length: 20 })
  afterUserId: string;

  @Column("int", {
    name: "after_point_uid",
    unsigned: true,
    default: () => "'0'",
  })
  afterPointUid: number;

  @Column("datetime", {
    primary: true,
    name: "combine_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  combineDate: Date;
}
