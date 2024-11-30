import { Column, Entity } from "typeorm";

@Entity("_user_check_list", { schema: "makeshop" })
export class UserCheckList {
  @Column("smallint", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("smallint", { name: "chk_id", unsigned: true, default: () => "'0'" })
  chkId: number;

  @Column("enum", {
    name: "ok_state",
    nullable: true,
    enum: ["", "NO", "YES", "PAUSE", "CANCEL"],
    default: () => "'NO'",
  })
  okState: "" | "NO" | "YES" | "PAUSE" | "CANCEL" | null;

  @Column("enum", {
    name: "display",
    nullable: true,
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  display: "" | "YES" | "NO" | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;

  @Column("datetime", { name: "mod_date", nullable: true })
  modDate: Date | null;

  @Column("tinyint", { name: "ok_count", nullable: true, default: () => "'0'" })
  okCount: number | null;
}
