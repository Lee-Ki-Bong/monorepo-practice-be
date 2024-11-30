import { Column, Entity } from "typeorm";

@Entity("daum_info", { schema: "makeshop" })
export class DaumInfo {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "prd_detail_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  prdDetailDisplay: "" | "Y" | "N";

  @Column("smallint", {
    name: "prd_detail_btn_no",
    unsigned: true,
    default: () => "'1'",
  })
  prdDetailBtnNo: number;

  @Column("enum", {
    primary: true,
    name: "service_type",
    enum: ["", "MEMBER", "GUEST"],
    default: () => "'MEMBER'",
  })
  serviceType: "" | "MEMBER" | "GUEST";

  @Column("enum", {
    name: "state",
    enum: ["", "APPROVAL", "RETURN", "CANCEL", "CLOSE"],
    default: () => "'APPROVAL'",
  })
  state: "" | "APPROVAL" | "RETURN" | "CANCEL" | "CLOSE";

  @Column("date", { name: "date_open", default: () => "'0000-00-00'" })
  dateOpen: string;

  @Column("date", { name: "date_close", default: () => "'0000-00-00'" })
  dateClose: string;

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;
}
