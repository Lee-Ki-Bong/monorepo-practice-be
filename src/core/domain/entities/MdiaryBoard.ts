import { Column, Entity, Index } from "typeorm";

@Index("mboard_index_admin_status", ["adminuser", "mboardStatus"], {})
@Index("mboard_index_registerdate", ["mboardRegisterDate"], {})
@Entity("mdiary_board", { schema: "makeshop" })
export class MdiaryBoard {
  @Column("int", {
    primary: true,
    name: "mboard_uid",
    unsigned: true,
    default: () => "'0'",
  })
  mboardUid: number;

  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "mboard_status",
    enum: ["", "SUCCESS", "NONE", "FAIL", "REFUSE", "FORBID"],
    default: () => "'NONE'",
  })
  mboardStatus: "" | "SUCCESS" | "NONE" | "FAIL" | "REFUSE" | "FORBID";

  @Column("enum", {
    name: "mboard_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mboardDisplay: "" | "Y" | "N";

  @Column("char", { name: "mboard_title_img", nullable: true, length: 30 })
  mboardTitleImg: string | null;

  @Column("char", { name: "mboard_subject", length: 200 })
  mboardSubject: string;

  @Column("bigint", {
    name: "mboard_cnt",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  mboardCnt: string | null;

  @Column("bigint", {
    name: "mboard_comment_cnt",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  mboardCommentCnt: string | null;

  @Column("datetime", {
    name: "mboard_register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mboardRegisterDate: Date;
}
