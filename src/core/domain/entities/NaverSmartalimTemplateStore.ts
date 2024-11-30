import { Column, Entity } from "typeorm";

@Entity("naver_smartalim_template_store", { schema: "makeshop" })
export class NaverSmartalimTemplateStore {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "template_code", length: 50 })
  templateCode: string;

  @Column("varchar", { name: "template_name", length: 50 })
  templateName: string;

  @Column("varchar", { name: "tmp_category_code", length: 4 })
  tmpCategoryCode: string;

  @Column("varchar", { name: "tmp_subject", length: 50 })
  tmpSubject: string;

  @Column("mediumtext", { name: "tmp_message" })
  tmpMessage: string;

  @Column("enum", {
    name: "tmp_state",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tmpState: "" | "Y" | "N";

  @Column("enum", {
    name: "tmp_auth",
    enum: ["", "Y", "WAIT", "N"],
    default: () => "'N'",
  })
  tmpAuth: "" | "Y" | "WAIT" | "N";

  @Column("enum", {
    name: "tmp_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  tmpDisplay: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("datetime", {
    name: "auth_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  authDate: Date;

  @Column("datetime", {
    name: "del_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  delDate: Date;

  @Column("mediumtext", { name: "template_fail_msg" })
  templateFailMsg: string;
}
