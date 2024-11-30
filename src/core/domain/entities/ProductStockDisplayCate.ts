import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_psdc_id", ["psdcId"], {})
@Index("psdc_cate", ["adminuser", "psdcXcode", "psdcMcode", "psdcScode"], {})
@Entity("product_stock_display_cate", { schema: "makeshop" })
export class ProductStockDisplayCate {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "psdc_id", unsigned: true })
  psdcId: number;

  @Column("char", { name: "psdc_xcode", length: 3 })
  psdcXcode: string;

  @Column("char", { name: "psdc_mcode", length: 3 })
  psdcMcode: string;

  @Column("char", { name: "psdc_scode", length: 3 })
  psdcScode: string;

  @Column("datetime", {
    name: "psdc_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  psdcRegDate: Date;
}
