import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("basket_num", ["adminuser", "tbId", "basketNum"], { unique: true })
@Index("idx_auto_tbp_id", ["tbpId"], {})
@Entity("taxbill_price", { schema: "makeshop" })
export class TaxbillPrice {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "tbp_id", unsigned: true })
  tbpId: number;

  @Column("int", { name: "tb_id", unsigned: true, default: () => "'0'" })
  tbId: number;

  @Column("varchar", { primary: true, name: "ordernum", length: 32 })
  ordernum: string;

  @Column("int", { name: "basket_num", default: () => "'0'" })
  basketNum: number;

  @Column("int", { name: "tbp_price", default: () => "'0'" })
  tbpPrice: number;

  @Column("int", { name: "tbp_reserve", default: () => "'0'" })
  tbpReserve: number;

  @Column("enum", {
    name: "tbp_tax_type",
    enum: ["", "tax", "tax_free", "tax_zero"],
    default: () => "'tax'",
  })
  tbpTaxType: "" | "tax" | "tax_free" | "tax_zero";

  @Column("varchar", { name: "tbp_hand_prd", nullable: true, length: 255 })
  tbpHandPrd: string | null;
}
