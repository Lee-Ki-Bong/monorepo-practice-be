import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_idx", ["idx"], {})
@Entity("product_sample", { schema: "makeshop" })
export class ProductSample {
  @Column("int", {
    primary: true,
    name: "mcate",
    unsigned: true,
    default: () => "'0'",
  })
  mcate: number;

  @Column("int", {
    primary: true,
    name: "cate1",
    unsigned: true,
    default: () => "'0'",
  })
  cate1: number;

  @PrimaryGeneratedColumn({ type: "int", name: "idx", unsigned: true })
  idx: number;

  @Column("varchar", { name: "brandname", length: 255 })
  brandname: string;

  @Column("int", { name: "sellprice", default: () => "'0'" })
  sellprice: number;

  @Column("varchar", { name: "image", length: 255 })
  image: string;
}
