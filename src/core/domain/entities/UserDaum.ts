import { Column, Entity } from "typeorm";

@Entity("user_daum", { schema: "makeshop" })
export class UserDaum {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("char", { primary: true, name: "open_id", length: 32 })
  openId: string;

  @Column("enum", {
    name: "state",
    enum: ["", "DONE", "EXIT"],
    default: () => "'DONE'",
  })
  state: "" | "DONE" | "EXIT";

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;
}
