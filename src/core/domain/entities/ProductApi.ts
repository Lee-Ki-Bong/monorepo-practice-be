import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bcode", ["adminuser", "barcode"], {})
@Index("idx_auto_pcode", ["pcode"], {})
@Index("skey", ["adminuser", "uid"], {})
@Index("wkey", ["adminuser", "uid", "opt"], { unique: true })
@Entity("product_api", { schema: "makeshop" })
export class ProductApi {
  @PrimaryGeneratedColumn({ type: "bigint", name: "pcode", unsigned: true })
  pcode: string;

  @Column("varchar", { primary: true, name: "adminuser", length: 16 })
  adminuser: string;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "opt", length: 255 })
  opt: string;

  @Column("bigint", { name: "barcode", nullable: true, unsigned: true })
  barcode: string | null;

  @Column("varchar", { name: "oldcode", nullable: true, length: 50 })
  oldcode: string | null;
}
