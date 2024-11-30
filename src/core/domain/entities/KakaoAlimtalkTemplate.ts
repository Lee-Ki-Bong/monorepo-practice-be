import { Column, Entity } from "typeorm";

@Entity("kakao_alimtalk_template", { schema: "makeshop" })
export class KakaoAlimtalkTemplate {
  @Column("varchar", { primary: true, name: "template_code", length: 255 })
  templateCode: string;

  @Column("varchar", { name: "tmp_subject", length: 255 })
  tmpSubject: string;

  @Column("mediumtext", { name: "tmp_message", nullable: true })
  tmpMessage: string | null;

  @Column("enum", {
    name: "tmp_state",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tmpState: "" | "Y" | "N";

  @Column("enum", {
    name: "tmp_auth",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tmpAuth: "" | "Y" | "N";

  @Column("enum", {
    name: "button_type",
    enum: ["", "N", "DS", "C"],
    default: () => "'N'",
  })
  buttonType: "" | "N" | "DS" | "C";

  @Column("varchar", { name: "button_name", length: 20 })
  buttonName: string;

  @Column("varchar", { name: "button_url", length: 150 })
  buttonUrl: string;
}
