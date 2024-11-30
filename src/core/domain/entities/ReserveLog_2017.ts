import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Index("user", ["adminuser", "userId"], {})
@Entity("reserve_log_2017", { schema: "makeshop" })
export class ReserveLog_2017 {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("int", { name: "reserve", nullable: true, default: () => "'0'" })
  reserve: number | null;

  @Column("enum", {
    name: "tbl_name",
    enum: ["", "reserve", "user", "review"],
    default: () => "'reserve'",
  })
  tblName: "" | "reserve" | "user" | "review";

  @Column("enum", {
    name: "type",
    nullable: true,
    enum: [
      "",
      "member_join",
      "write_recommand",
      "recommanded",
      "spend_reserve",
      "get_reserve",
      "restore_by_cancel",
      "reserve_by_cancel",
      "restore_by_fail",
      "member_out",
      "review",
      "group",
      "event_reserve",
      "delreserve_by_event",
      "deldetail_by_event",
      "reserve_record",
      "board",
      "point_exchange",
      "desktop",
      "app_down",
      "app_recommanded",
      "app_push",
      "stampang",
      "viewfinder",
      "attendance",
    ],
  })
  type:
    | ""
    | "member_join"
    | "write_recommand"
    | "recommanded"
    | "spend_reserve"
    | "get_reserve"
    | "restore_by_cancel"
    | "reserve_by_cancel"
    | "restore_by_fail"
    | "member_out"
    | "review"
    | "group"
    | "event_reserve"
    | "delreserve_by_event"
    | "deldetail_by_event"
    | "reserve_record"
    | "board"
    | "point_exchange"
    | "desktop"
    | "app_down"
    | "app_recommanded"
    | "app_push"
    | "stampang"
    | "viewfinder"
    | "attendance"
    | null;

  @Column("varchar", {
    name: "ip",
    nullable: true,
    length: 15,
    default: () => "'000.000.000.000'",
  })
  ip: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;
}
