import { Column, Entity } from "typeorm";

@Entity("adticket_info", { schema: "makeshop" })
export class AdticketInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  display: "" | "Y" | "N";

  @Column("enum", {
    name: "displayP",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  displayP: "" | "Y" | "N";

  @Column("enum", {
    name: "displayM",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  displayM: "" | "Y" | "N";

  @Column("enum", {
    name: "displayW",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  displayW: "" | "Y" | "N";

  @Column("enum", {
    name: "get_type",
    enum: ["", "A", "G", "F"],
    default: () => "'A'",
  })
  getType: "" | "A" | "G" | "F";

  @Column("enum", {
    name: "cmpnk_use",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  cmpnkUse: "" | "Y" | "N";

  @Column("text", { name: "cmpnk_ckc" })
  cmpnkCkc: string;

  @Column("text", { name: "cmpnk_ckc_name" })
  cmpnkCkcName: string;

  @Column("text", { name: "cmpnk_idx" })
  cmpnkIdx: string;

  @Column("text", { name: "cmpnk_idx_name" })
  cmpnkIdxName: string;

  @Column("enum", {
    name: "cbook_title_type",
    enum: ["", "T", "I"],
    default: () => "'T'",
  })
  cbookTitleType: "" | "T" | "I";

  @Column("varchar", { name: "cbook_shopname", length: 25 })
  cbookShopname: string;

  @Column("varchar", { name: "cbook_greet", length: 120 })
  cbookGreet: string;

  @Column("varchar", { name: "cbook_images", length: 100 })
  cbookImages: string;

  @Column("text", { name: "cp_joy_idx" })
  cpJoyIdx: string;

  @Column("text", { name: "cp_joy_name" })
  cpJoyName: string;
}
