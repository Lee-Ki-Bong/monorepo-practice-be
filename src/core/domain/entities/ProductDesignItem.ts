import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pdi_id", ["pdiId"], {})
@Entity("product_design_item", { schema: "makeshop" })
export class ProductDesignItem {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "pdi_design_id",
    unsigned: true,
    default: () => "'0'",
  })
  pdiDesignId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "pdi_id", unsigned: true })
  pdiId: number;

  @Column("int", {
    name: "pdi_product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  pdiProductUid: number;

  @Column("smallint", {
    name: "pdi_sort",
    unsigned: true,
    default: () => "'0'",
  })
  pdiSort: number;

  @Column("datetime", {
    name: "pdi_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pdiRegDate: Date;
}
