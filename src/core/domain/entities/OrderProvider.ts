import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "ordernum", "provider"], { unique: true })
@Index("idx_auto_uid", ["uid"], {})
@Entity("order_provider", { schema: "makeshop" })
export class OrderProvider {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("char", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("mediumint", {
    name: "provider",
    unsigned: true,
    default: () => "'0'",
  })
  provider: number;

  @Column("datetime", {
    name: "register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  registerDate: Date;

  @Column("mediumint", { name: "delivery_charge", default: () => "'0'" })
  deliveryCharge: number;
}
