import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("display", ["adminuser", "userId", "pointDisplay"], {})
@Index("hist_group_uid", ["adminuser", "userId", "histGroupUid"], {})
@Index("idx_auto_hist_uid", ["histUid"], {})
@Index("point_expire_date", ["adminuser", "userId", "pointExpireDate"], {})
@Index(
  "point_receive_type",
  ["adminuser", "userId", "pointReceiveType", "pointPoint"],
  {}
)
@Index("point_uid", ["adminuser", "userId", "pointUid"], {})
@Entity("gift_point_history", { schema: "makeshop" })
export class GiftPointHistory {
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

  @PrimaryGeneratedColumn({ type: "int", name: "hist_uid", unsigned: true })
  histUid: number;

  @Column("varchar", { name: "hist_group_uid", length: 19 })
  histGroupUid: string;

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

  @Column("decimal", {
    name: "point_point",
    precision: 10,
    scale: 1,
    default: () => "'0.0'",
  })
  pointPoint: string;

  @Column("varchar", {
    name: "point_receive_type",
    length: 10,
    default: () => "'SAVE'",
  })
  pointReceiveType: string;

  @Column("varchar", { name: "point_content", length: 255 })
  pointContent: string;

  @Column("date", { name: "point_expire_date", default: () => "'0000-00-00'" })
  pointExpireDate: string;
}
