import { Column, Entity, Index } from "typeorm";

@Index("code", ["code", "uid", "noticeOrderDate"], {})
@Index("uid", ["adminuser", "code", "num1", "num2", "uid"], {})
@Entity("board_notice", { schema: "makeshop" })
export class BoardNotice {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "icon_name", nullable: true, length: 20 })
  iconName: string | null;

  @Column("set", {
    name: "recommend_type",
    nullable: true,
    enum: ["1", "2", "3", "4"],
  })
  recommendType: ("1" | "2" | "3" | "4")[] | null;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N";

  @Column("datetime", {
    name: "register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  registerDate: Date;

  @Column("datetime", {
    name: "notice_order_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  noticeOrderDate: Date;

  @Column("enum", {
    name: "main_view",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  mainView: "" | "Y" | "N";
}
