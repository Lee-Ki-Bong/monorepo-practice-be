import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_ext_uid", ["extUid"], {})
@Entity("checkout_extension", { schema: "makeshop" })
export class CheckoutExtension {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "checkout_order_id", length: 20 })
  checkoutOrderId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ext_uid", unsigned: true })
  extUid: number;

  @Column("int", { name: "basket_num", unsigned: true, default: () => "'0'" })
  basketNum: number;

  @Column("varchar", { name: "ext_type", length: 8 })
  extType: string;

  @Column("varchar", { name: "ext_title", length: 200 })
  extTitle: string;

  @Column("int", { name: "ext_price", default: () => "'0'" })
  extPrice: number;

  @Column("varchar", { name: "ext_info", nullable: true, length: 255 })
  extInfo: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'1001-01-01 00:00:00'",
  })
  regDate: Date;
}
