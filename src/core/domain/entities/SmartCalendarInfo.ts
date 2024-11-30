import { Column, Entity } from "typeorm";

@Entity("smart_calendar_info", { schema: "makeshop" })
export class SmartCalendarInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "sc_info_except_flag",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  scInfoExceptFlag: "" | "N" | "Y";

  @Column("enum", {
    name: "sc_info_active_flag",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  scInfoActiveFlag: "" | "N" | "Y";

  @Column("varchar", { name: "sc_info_except_text", length: 255 })
  scInfoExceptText: string;

  @Column("varchar", { name: "sc_info_active_text", length: 255 })
  scInfoActiveText: string;
}
