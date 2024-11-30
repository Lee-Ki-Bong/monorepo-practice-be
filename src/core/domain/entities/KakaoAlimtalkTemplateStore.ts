import { Column, Entity } from "typeorm";

@Entity("kakao_alimtalk_template_store", { schema: "makeshop" })
export class KakaoAlimtalkTemplateStore {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "template_code", length: 50 })
  templateCode: string;

  @Column("varchar", { name: "template_name", length: 50 })
  templateName: string;

  @Column("enum", {
    name: "template_type",
    enum: ["", "BA", "EX"],
    default: () => "'BA'",
  })
  templateType: "" | "BA" | "EX";

  @Column("enum", {
    name: "tmp_em_type",
    enum: ["", "NONE", "TEXT"],
    default: () => "'NONE'",
  })
  tmpEmType: "" | "NONE" | "TEXT";

  @Column("varchar", { name: "tmp_em_title", length: 200 })
  tmpEmTitle: string;

  @Column("varchar", { name: "tmp_em_subtitle", length: 200 })
  tmpEmSubtitle: string;

  @Column("varchar", { name: "tmp_subject", length: 50 })
  tmpSubject: string;

  @Column("mediumtext", { name: "tmp_message" })
  tmpMessage: string;

  @Column("mediumtext", { name: "tmp_extra_message" })
  tmpExtraMessage: string;

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

  @Column("enum", {
    name: "button_type",
    enum: ["", "N", "DS", "C"],
    default: () => "'N'",
  })
  buttonType: "" | "N" | "DS" | "C";

  @Column("varchar", { name: "button_name", length: 50 })
  buttonName: string;

  @Column("varchar", { name: "button_url", length: 150 })
  buttonUrl: string;

  @Column("mediumtext", { name: "button_detail" })
  buttonDetail: string;

  @Column("mediumtext", { name: "template_fail_msg" })
  templateFailMsg: string;
}
