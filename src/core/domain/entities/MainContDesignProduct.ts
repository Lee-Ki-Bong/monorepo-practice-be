import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_cp_uid", ["cpUid"], {})
@Entity("main_cont_design_product", { schema: "makeshop" })
export class MainContDesignProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "mc_type",
    unsigned: true,
    default: () => "'0'",
  })
  mcType: number;

  @Column("int", {
    primary: true,
    name: "cp_type",
    unsigned: true,
    default: () => "'0'",
  })
  cpType: number;

  @PrimaryGeneratedColumn({ type: "int", name: "cp_uid", unsigned: true })
  cpUid: number;

  @Column("int", {
    name: "cp_product_order",
    unsigned: true,
    default: () => "'0'",
  })
  cpProductOrder: number;

  @Column("int", { name: "cp_product_uid", default: () => "'0'" })
  cpProductUid: number;

  @Column("varchar", { name: "cp_product_name", length: 100 })
  cpProductName: string;

  @Column("varchar", { name: "cp_product_info", length: 100 })
  cpProductInfo: string;
}
