import { Column, Entity } from "typeorm";

@Entity("product_color_config", { schema: "makeshop" })
export class ProductColorConfig {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "color_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  colorUse: "" | "Y" | "N";

  @Column("smallint", {
    name: "color_size",
    unsigned: true,
    default: () => "'10'",
  })
  colorSize: number;

  @Column("enum", {
    name: "color_pos_x",
    enum: ["", "LEFT", "CENTER", "RIGHT"],
    default: () => "'CENTER'",
  })
  colorPosX: "" | "LEFT" | "CENTER" | "RIGHT";

  @Column("enum", {
    name: "color_pos_y",
    enum: ["", "TOP", "BOTTOM"],
    default: () => "'BOTTOM'",
  })
  colorPosY: "" | "TOP" | "BOTTOM";

  @Column("char", { name: "color_border", length: 6 })
  colorBorder: string;

  @Column("datetime", {
    name: "up_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  upTime: Date;
}
