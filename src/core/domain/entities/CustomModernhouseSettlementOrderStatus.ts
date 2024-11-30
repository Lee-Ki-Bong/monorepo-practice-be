import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("admin_ordernum", ["adminuser", "ordernum"], {})
@Index("admin_ordernum_stat", ["adminuser", "ordernum", "statType"], {})
@Index("admin_ordernum_status", ["adminuser", "ordernum", "salesStatus"], {})
@Index("admin_reg", ["adminuser", "regDate"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("custom_modernhouse_settlement_order_status", { schema: "makeshop" })
export class CustomModernhouseSettlementOrderStatus {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    name: "refund_uid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  refundUid: number | null;

  @Column("char", { name: "stat_type", length: 2, default: () => "'D'" })
  statType: string;

  @Column("char", {
    name: "sales_status",
    nullable: true,
    length: 1,
    default: () => "'W'",
  })
  salesStatus: string | null;

  @Column("int", { name: "pay_price", default: () => "'0'" })
  payPrice: number;

  @Column("mediumtext", { name: "memo", nullable: true })
  memo: string | null;

  @Column("datetime", { name: "upd_date", nullable: true })
  updDate: Date | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
