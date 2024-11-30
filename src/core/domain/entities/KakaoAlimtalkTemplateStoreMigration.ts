import { Column, Entity } from "typeorm";

@Entity("kakao_alimtalk_template_store_migration", { schema: "makeshop" })
export class KakaoAlimtalkTemplateStoreMigration {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "template_code", length: 50 })
  templateCode: string;

  @Column("enum", {
    name: "tmp_auth",
    enum: ["Y", "WAIT", "N"],
    default: () => "'N'",
  })
  tmpAuth: "Y" | "WAIT" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "auth_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  authDate: Date;

  @Column("text", { name: "template_fail_msg" })
  templateFailMsg: string;
}
