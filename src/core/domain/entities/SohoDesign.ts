import { Column, Entity } from "typeorm";

@Entity("soho_design", { schema: "makeshop" })
export class SohoDesign {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "shopname", length: 50 })
  shopname: string;

  @Column("varchar", { name: "bookmark_name", nullable: true, length: 50 })
  bookmarkName: string | null;

  @Column("varchar", { name: "logo_image", length: 255 })
  logoImage: string;

  @Column("enum", {
    name: "list_type",
    enum: ["", "T", "L", "L2"],
    default: () => "'L'",
  })
  listType: "" | "T" | "L" | "L2";

  @Column("enum", {
    name: "design_type",
    enum: ["", "gray", "aqua", "blue", "green", "orange", "purple", "red"],
    default: () => "'gray'",
  })
  designType:
    | ""
    | "gray"
    | "aqua"
    | "blue"
    | "green"
    | "orange"
    | "purple"
    | "red";

  @Column("enum", {
    name: "use_notice",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useNotice: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "use_order",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useOrder: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "webzine_view",
    enum: ["", "H", "V"],
    default: () => "'H'",
  })
  webzineView: "" | "H" | "V";
}
