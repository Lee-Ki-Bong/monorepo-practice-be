import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("canceled_date", ["adminuser", "canceledDate"], {})
@Index("idx_auto_id", ["id"], {})
@Index("ordernum", ["adminuser", "ordernum"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Entity("linkprice_order", { schema: "makeshop" })
export class LinkpriceOrder {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "ordernum", length: 50 })
  ordernum: string;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;

  @Column("mediumtext", { name: "lpinfo" })
  lpinfo: string;

  @Column("mediumtext", { name: "user_agent" })
  userAgent: string;

  @Column("varchar", { name: "ip", length: 50 })
  ip: string;

  @Column("varchar", { name: "device_type", length: 11 })
  deviceType: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "canceled_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  canceledDate: Date;
}
