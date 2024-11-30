import { Column, Entity } from "typeorm";

@Entity("soho_page_product", { schema: "makeshop" })
export class SohoPageProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "pid", default: () => "'0'" })
  pid: number;

  @Column("tinyint", {
    primary: true,
    name: "product_position",
    default: () => "'1'",
  })
  productPosition: number;

  @Column("enum", {
    name: "product_type",
    enum: ["", "I", "V"],
    default: () => "'I'",
  })
  productType: "" | "I" | "V";

  @Column("varchar", { name: "image_url", length: 255 })
  imageUrl: string;

  @Column("enum", {
    name: "video_target",
    enum: ["", "S", "B"],
    default: () => "'B'",
  })
  videoTarget: "" | "S" | "B";

  @Column("enum", {
    name: "link_type",
    enum: ["", "P", "L", "N"],
    default: () => "'P'",
  })
  linkType: "" | "P" | "L" | "N";

  @Column("int", { name: "uid", default: () => "'0'" })
  uid: number;

  @Column("enum", {
    name: "use_pimage",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  usePimage: "" | "Y" | "N";

  @Column("enum", {
    name: "use_basket",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useBasket: "" | "Y" | "N";

  @Column("enum", {
    name: "ptext_type",
    enum: ["", "B", "P", "F", "Y", "N"],
    default: () => "'B'",
  })
  ptextType: "" | "B" | "P" | "F" | "Y" | "N";

  @Column("varchar", { name: "ptext", length: 100 })
  ptext: string;

  @Column("varchar", {
    name: "ptext_bgcolor",
    length: 7,
    default: () => "'#000000'",
  })
  ptextBgcolor: string;

  @Column("tinyint", { name: "ptext_opacity", default: () => "'40'" })
  ptextOpacity: number;

  @Column("varchar", { name: "link_url", length: 255 })
  linkUrl: string;

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
