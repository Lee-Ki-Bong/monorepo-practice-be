import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("product_id", ["uid", "stdId"], {})
@Index("std_id", ["stdId"], {})
@Entity("jobworld_product", { schema: "makeshop" })
export class JobworldProduct {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "std_id", length: 20 })
  stdId: string;

  @Column("varchar", { name: "product_name", length: 255 })
  productName: string;

  @Column("int", { name: "product_sell_price", nullable: true })
  productSellPrice: number | null;

  @Column("int", { name: "product_price", nullable: true })
  productPrice: number | null;

  @Column("enum", {
    name: "stock_set",
    nullable: true,
    enum: ["", "U", "Q", "S"],
    default: () => "'U'",
  })
  stockSet: "" | "U" | "Q" | "S" | null;

  @Column("int", { name: "stock", nullable: true })
  stock: number | null;

  @Column("varchar", { name: "main_image_1", length: 255 })
  mainImage_1: string;

  @Column("varchar", { name: "detail_image_1", length: 255 })
  detailImage_1: string;

  @Column("varchar", { name: "detail_image_2", length: 255 })
  detailImage_2: string;

  @Column("mediumtext", { name: "detail_content", nullable: true })
  detailContent: string | null;

  @Column("datetime", {
    name: "add_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  addDate: Date;
}
