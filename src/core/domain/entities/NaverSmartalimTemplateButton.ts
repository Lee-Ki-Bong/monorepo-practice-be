import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_template_idx", ["templateIdx"], {})
@Entity("naver_smartalim_template_button", { schema: "makeshop" })
export class NaverSmartalimTemplateButton {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "template_code", length: 50 })
  templateCode: string;

  @PrimaryGeneratedColumn({ type: "int", name: "template_idx", unsigned: true })
  templateIdx: number;

  @Column("enum", {
    name: "button_type",
    enum: ["", "W", "A"],
    default: () => "'W'",
  })
  buttonType: "" | "W" | "A";

  @Column("enum", {
    name: "button_link_type",
    enum: ["", "M", "P", "I", "A"],
    default: () => "'M'",
  })
  buttonLinkType: "" | "M" | "P" | "I" | "A";

  @Column("varchar", { name: "button_url", length: 200 })
  buttonUrl: string;

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
}
