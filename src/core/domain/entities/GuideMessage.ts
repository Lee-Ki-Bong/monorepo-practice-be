import { Column, Entity } from "typeorm";

@Entity("guide_message", { schema: "makeshop" })
export class GuideMessage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "msg_type", length: 20 })
  msgType: string;

  @Column("mediumtext", { name: "message" })
  message: string;

  @Column("enum", {
    name: "msg_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  msgDisplay: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
