import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_color_id", ["colorId"], {})
@Entity("product_color_list", { schema: "makeshop" })
export class ProductColorList {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "color_id", unsigned: true })
  colorId: number;

  @Column("char", { name: "color_code", length: 6 })
  colorCode: string;

  @Column("char", { name: "color_name", length: 20 })
  colorName: string;

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;
}
