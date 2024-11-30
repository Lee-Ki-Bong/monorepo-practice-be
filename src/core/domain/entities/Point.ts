import { Column, Entity } from "typeorm";

@Entity("point", { schema: "makeshop" })
export class Point {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "point_status",
    enum: ["", "NO", "YES"],
    default: () => "'NO'",
  })
  pointStatus: "" | "NO" | "YES";

  @Column("varchar", {
    name: "point_title",
    length: 30,
    default: () => "'point'",
  })
  pointTitle: string;

  @Column("varchar", { name: "point_unit", length: 20, default: () => "'p'" })
  pointUnit: string;

  @Column("bigint", {
    name: "point_newuser",
    unsigned: true,
    default: () => "'0'",
  })
  pointNewuser: string;

  @Column("bigint", {
    name: "point_login",
    unsigned: true,
    default: () => "'0'",
  })
  pointLogin: string;

  @Column("enum", {
    name: "user_point_trans",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  userPointTrans: "" | "YES" | "NO";

  @Column("bigint", {
    name: "point_trans_least",
    unsigned: true,
    default: () => "'0'",
  })
  pointTransLeast: string;

  @Column("mediumint", {
    name: "point_trans_unit",
    unsigned: true,
    default: () => "'0'",
  })
  pointTransUnit: number;

  @Column("mediumint", {
    name: "reserve_trans_unit",
    unsigned: true,
    default: () => "'1'",
  })
  reserveTransUnit: number;

  @Column("enum", {
    name: "point_board_type",
    enum: ["", "NONE", "ALL", "EACH"],
    default: () => "'NONE'",
  })
  pointBoardType: "" | "NONE" | "ALL" | "EACH";

  @Column("enum", {
    name: "point_review_type",
    enum: ["", "NO", "YES"],
    default: () => "'NO'",
  })
  pointReviewType: "" | "NO" | "YES";

  @Column("mediumtext", { name: "point_board", nullable: true })
  pointBoard: string | null;

  @Column("mediumtext", { name: "point_comment", nullable: true })
  pointComment: string | null;

  @Column("mediumtext", { name: "point_review", nullable: true })
  pointReview: string | null;

  @Column("enum", {
    name: "point_trans_date_type",
    nullable: true,
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  pointTransDateType: "" | "YES" | "NO" | null;

  @Column("mediumint", {
    name: "point_trans_date",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  pointTransDate: number | null;

  @Column("enum", {
    name: "point_order_use",
    nullable: true,
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  pointOrderUse: "" | "YES" | "NO" | null;

  @Column("varchar", { name: "point_order_msg", nullable: true, length: 255 })
  pointOrderMsg: string | null;

  @Column("enum", {
    name: "point_end_type",
    nullable: true,
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  pointEndType: "" | "YES" | "NO" | null;

  @Column("varchar", { name: "point_end_date", nullable: true, length: 20 })
  pointEndDate: string | null;

  @Column("enum", {
    name: "point_image",
    nullable: true,
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  pointImage: "" | "YES" | "NO" | null;

  @Column("varchar", { name: "point_etctype", nullable: true, length: 255 })
  pointEtctype: string | null;
}
