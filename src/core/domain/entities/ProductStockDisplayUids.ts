import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_psdu_id", ["psduId"], {})
@Index("psdu_product", ["adminuser", "psduProductUid"], {})
@Entity("product_stock_display_uids", { schema: "makeshop" })
export class ProductStockDisplayUids {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "psdu_id", unsigned: true })
  psduId: number;

  @Column("int", {
    name: "psdu_product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  psduProductUid: number;

  @Column("datetime", {
    name: "psdu_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  psduRegDate: Date;
}
