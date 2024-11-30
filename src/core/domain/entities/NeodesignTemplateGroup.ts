import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("design_group_type", ["designGroupType", "designGroup", "boardType"], {
  unique: true,
})
@Entity("neodesign_template_group", { schema: "makeshop" })
export class NeodesignTemplateGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "tpl_group_id", unsigned: true })
  tplGroupId: number;

  @Column("enum", {
    name: "design_group_type",
    enum: [
      "SHOP",
      "BOARD",
      "M_SHOP",
      "M_BOARD",
      "S_SHOP",
      "M_POWERPACK",
      "HIFARM_S",
      "HIFARM_M",
      "RW_SHOP",
      "RW_BOARD",
    ],
    default: () => "'SHOP'",
  })
  designGroupType:
    | "SHOP"
    | "BOARD"
    | "M_SHOP"
    | "M_BOARD"
    | "S_SHOP"
    | "M_POWERPACK"
    | "HIFARM_S"
    | "HIFARM_M"
    | "RW_SHOP"
    | "RW_BOARD";

  @Column("char", { name: "design_group", length: 20 })
  designGroup: string;

  @Column("enum", {
    name: "board_type",
    enum: [
      "",
      "NONE",
      "NORMAL",
      "GALLERY",
      "HOMEPY",
      "GUEST",
      "DATA",
      "LINK",
      "MOVIE",
      "SYSOP",
      "SEVENT",
    ],
    default: () => "'NONE'",
  })
  boardType:
    | ""
    | "NONE"
    | "NORMAL"
    | "GALLERY"
    | "HOMEPY"
    | "GUEST"
    | "DATA"
    | "LINK"
    | "MOVIE"
    | "SYSOP"
    | "SEVENT";
}
