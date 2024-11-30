import { Column, Entity, Index } from "typeorm";

@Index("cpa_type", ["adminuser", "nvcpaType"], {})
@Entity("order_nvcpa", { schema: "makeshop" })
export class OrderNvcpa {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("varchar", { name: "nvcpa_type", length: 80 })
  nvcpaType: string;

  @Column("mediumtext", { name: "order_text" })
  orderText: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
