import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("code_combine_date", ["code", "combineDate"], {})
@Index("date", ["code", "date"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("combine_comment", { schema: "makeshop" })
export class CombineComment {
  @PrimaryGeneratedColumn({ type: "int", name: "uid" })
  uid: number;

  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("int", { name: "cmt_left", unsigned: true, default: () => "'0'" })
  cmtLeft: number;

  @Column("int", { name: "cmt_right", unsigned: true, default: () => "'0'" })
  cmtRight: number;

  @Column("int", { name: "depth", unsigned: true, default: () => "'0'" })
  depth: number;

  @Column("bigint", {
    name: "recommend_cnt",
    unsigned: true,
    default: () => "'0'",
  })
  recommendCnt: string;

  @Column("varchar", { name: "hname", length: 20 })
  hname: string;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "owner_id", length: 12 })
  ownerId: string;

  @Column("varchar", { name: "sub_id", nullable: true, length: 20 })
  subId: string | null;

  @Column("varchar", { name: "password", length: 128 })
  password: string;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N";

  @Column("enum", {
    name: "write_path",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  writePath: "" | "WEB" | "MOBILE";

  @Column("enum", {
    name: "secret",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  secret: "" | "Y" | "N";

  @Column("datetime", {
    name: "reserve_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  reserveDate: Date | null;

  @Column("datetime", {
    name: "point_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pointDate: Date;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("mediumtext", { name: "comment", nullable: true })
  comment: string | null;

  @Column("enum", { name: "agree", enum: ["", "Y", "N"], default: () => "'N'" })
  agree: "" | "Y" | "N";

  @Column("char", { name: "agree_selective", length: 2, default: () => "'--'" })
  agreeSelective: string;

  @Column("char", { name: "power_review", length: 1 })
  powerReview: string;

  @Column("int", { name: "sms_send_cnt", default: () => "'0'" })
  smsSendCnt: number;

  @Column("datetime", {
    primary: true,
    name: "combine_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  combineDate: Date;
}
