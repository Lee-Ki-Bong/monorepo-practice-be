import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("sc_idx", ["adminuser", "payDate", "subId"], {})
@Entity("oo_hand_pay_history", { schema: "makeshop" })
export class OoHandPayHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "no", unsigned: true })
  no: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("datetime", {
    name: "pay_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  payDate: Date;

  @Column("varchar", {
    name: "ordernum",
    length: 26,
    default: () => "'0000-00-00 00:00:00'",
  })
  ordernum: string;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("int", { name: "pay_price", unsigned: true, default: () => "'0'" })
  payPrice: number;

  @Column("varchar", { name: "ip_addr", length: 20 })
  ipAddr: string;
}
