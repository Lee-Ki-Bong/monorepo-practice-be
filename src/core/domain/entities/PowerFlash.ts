import { Column, Entity } from "typeorm";

@Entity("power_flash", { schema: "makeshop" })
export class PowerFlash {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "power_flash_type",
    enum: [
      "",
      "paparazzi",
      "cube",
      "main_banner",
      "shiner",
      "3d_image",
      "highlight2",
      "rollover",
    ],
    default: () => "'paparazzi'",
  })
  powerFlashType:
    | ""
    | "paparazzi"
    | "cube"
    | "main_banner"
    | "shiner"
    | "3d_image"
    | "highlight2"
    | "rollover";

  @Column("enum", {
    name: "power_flash_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  powerFlashUse: "" | "Y" | "N";

  @Column("mediumtext", { name: "display_setting" })
  displaySetting: string;

  @Column("mediumtext", { name: "design_setting" })
  designSetting: string;

  @Column("mediumtext", { name: "product_setting" })
  productSetting: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { name: "title", length: 50 })
  title: string;

  @Column("datetime", {
    name: "register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  registerDate: Date;

  @Column("datetime", {
    name: "modify_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modifyDate: Date;
}
