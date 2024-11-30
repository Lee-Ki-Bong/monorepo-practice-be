import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("product_price_update_log", { schema: "makeshop" })
export class ProductPriceUpdateLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "subid", nullable: true, length: 20 })
  subid: string | null;

  @Column("int", { name: "total_cnt", unsigned: true, default: () => "'0'" })
  totalCnt: number;

  @Column("int", { name: "ok_cnt", unsigned: true, default: () => "'0'" })
  okCnt: number;

  @Column("int", { name: "fail_cnt", unsigned: true, default: () => "'0'" })
  failCnt: number;

  @Column("varchar", { name: "reg_date", length: 16 })
  regDate: string;
}
