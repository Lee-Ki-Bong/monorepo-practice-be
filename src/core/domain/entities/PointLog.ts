import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("user_id", ["adminuser", "userId", "date"], {})
@Entity("point_log", { schema: "makeshop" })
export class PointLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "user_id", length: 12 })
  userId: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("int", { name: "point", default: () => "'0'" })
  point: number;

  @Column("enum", {
    name: "tbl_name",
    enum: ["", "point", "user"],
    default: () => "'point'",
  })
  tblName: "" | "point" | "user";

  @Column("enum", {
    name: "type",
    nullable: true,
    enum: [
      "",
      "admin",
      "login",
      "board",
      "comment",
      "attendance",
      "exchange",
      "comment_recommend",
      "delete",
      "game",
      "order",
      "expire",
      "minus",
      "calculate",
      "auto_group_move",
      "review",
      "lifetime",
      "viewfinder",
    ],
  })
  type:
    | ""
    | "admin"
    | "login"
    | "board"
    | "comment"
    | "attendance"
    | "exchange"
    | "comment_recommend"
    | "delete"
    | "game"
    | "order"
    | "expire"
    | "minus"
    | "calculate"
    | "auto_group_move"
    | "review"
    | "lifetime"
    | "viewfinder"
    | null;

  @Column("varchar", { name: "ip", length: 20 })
  ip: string;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;
}
