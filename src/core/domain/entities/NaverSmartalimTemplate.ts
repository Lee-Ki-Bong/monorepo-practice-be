import { Column, Entity } from "typeorm";

@Entity("naver_smartalim_template", { schema: "makeshop" })
export class NaverSmartalimTemplate {
  @Column("varchar", { primary: true, name: "template_code", length: 255 })
  templateCode: string;

  @Column("varchar", { name: "tmp_subject", length: 255 })
  tmpSubject: string;

  @Column("char", { name: "tmp_category_code", length: 3 })
  tmpCategoryCode: string;

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
}
