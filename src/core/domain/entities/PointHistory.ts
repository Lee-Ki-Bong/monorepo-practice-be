import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("display", ["adminuser", "userId", "pointDisplay"], {})
@Index("idx_auto_point_uid", ["pointUid"], {})
@Index(
  "point_cnt",
  [
    "adminuser",
    "userId",
    "pointRegisterDate",
    "pointReceiveType",
    "pointBoardcode",
  ],
  {}
)
@Entity("point_history", { schema: "makeshop" })
export class PointHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 12 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "point_uid", unsigned: true })
  pointUid: number;

  @Column("enum", {
    name: "point_display",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  pointDisplay: "" | "YES" | "NO";

  @Column("datetime", {
    name: "point_register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pointRegisterDate: Date;

  @Column("int", { name: "point_point", default: () => "'0'" })
  pointPoint: number;

  @Column("enum", {
    name: "point_receive_type",
    nullable: true,
    enum: [
      "",
      "ADMIN",
      "BOARD",
      "COMMENT",
      "LOGIN",
      "NEWJOIN",
      "ATTENDANCE",
      "EXCHANGE",
      "COMMENT_RECOMMEND",
      "GAME",
      "ORDER",
      "EXPIRE",
      "MINUS",
      "CALCULATE",
      "ATTENDANCE_BOARD",
      "AUTO_GROUP_MOVE",
      "REVIEW",
      "POWERAPP_DOWNLOAD",
      "POWERAPP_RECOMMEND",
      "POWERAPP_PUSH",
      "RM_NEWJOIN",
      "LIFETIME",
      "VIEWFINDER",
    ],
  })
  pointReceiveType:
    | ""
    | "ADMIN"
    | "BOARD"
    | "COMMENT"
    | "LOGIN"
    | "NEWJOIN"
    | "ATTENDANCE"
    | "EXCHANGE"
    | "COMMENT_RECOMMEND"
    | "GAME"
    | "ORDER"
    | "EXPIRE"
    | "MINUS"
    | "CALCULATE"
    | "ATTENDANCE_BOARD"
    | "AUTO_GROUP_MOVE"
    | "REVIEW"
    | "POWERAPP_DOWNLOAD"
    | "POWERAPP_RECOMMEND"
    | "POWERAPP_PUSH"
    | "RM_NEWJOIN"
    | "LIFETIME"
    | "VIEWFINDER"
    | null;

  @Column("varchar", { name: "point_boardcode", length: 24 })
  pointBoardcode: string;

  @Column("varchar", { name: "point_ordernum", nullable: true, length: 50 })
  pointOrdernum: string | null;

  @Column("int", { name: "point_basketnum", nullable: true })
  pointBasketnum: number | null;

  @Column("enum", {
    name: "point_trans_type",
    enum: ["", "YES", "NO", "EXPIRE"],
    default: () => "'YES'",
  })
  pointTransType: "" | "YES" | "NO" | "EXPIRE";

  @Column("varchar", { name: "point_content", length: 255 })
  pointContent: string;

  @Column("date", { name: "point_expire_date", default: () => "'0000-00-00'" })
  pointExpireDate: string;

  @Column("mediumtext", { name: "point_rel", nullable: true })
  pointRel: string | null;
}
