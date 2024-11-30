import { Column, Entity, Index } from "typeorm";

@Index("item_cd", ["adminuser", "itemCd"], {})
@Entity("send_product_log", { schema: "makeshop" })
export class SendProductLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "item_cd", length: 50 })
  itemCd: string;

  @Column("int", { name: "stock", nullable: true })
  stock: number | null;

  @Column("int", { name: "old_stock", nullable: true })
  oldStock: number | null;

  @Column("varchar", { primary: true, name: "if_id", length: 13 })
  ifId: string;

  @Column("datetime", { name: "regdate", nullable: true })
  regdate: Date | null;
}
