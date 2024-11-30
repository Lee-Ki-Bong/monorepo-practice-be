import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_gpq_idx", ["gpqIdx"], {})
@Entity("gift_price_qty", { schema: "makeshop" })
export class GiftPriceQty {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "gpq_idx" })
  gpqIdx: number;

  @Column("int", { name: "gpq_sprice", default: () => "'0'" })
  gpqSprice: number;

  @Column("enum", {
    name: "gpq_sprice_set",
    enum: ["", "FROM", "OVER"],
    default: () => "'FROM'",
  })
  gpqSpriceSet: "" | "FROM" | "OVER";

  @Column("int", { name: "gpq_eprice", default: () => "'0'" })
  gpqEprice: number;

  @Column("int", { name: "gpq_qty", default: () => "'0'" })
  gpqQty: number;
}
