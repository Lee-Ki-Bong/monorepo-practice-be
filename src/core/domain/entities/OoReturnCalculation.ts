import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_return_uid", ["returnUid"], {})
@Index("ordernum_idx", ["adminuser", "ordernum"], {})
@Index("uniq", ["adminuser", "ordernum", "queueDate"], { unique: true })
@Entity("oo_return_calculation", { schema: "makeshop" })
export class OoReturnCalculation {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "return_uid", unsigned: true })
  returnUid: number;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("mediumtext", { name: "basket_set" })
  basketSet: string;

  @Column("varchar", { name: "ext_set", length: 255 })
  extSet: string;

  @Column("int", { name: "issue_price", default: () => "'0'" })
  issuePrice: number;

  @Column("bigint", {
    name: "refund_deli_price",
    unsigned: true,
    default: () => "'0'",
  })
  refundDeliPrice: string;

  @Column("bigint", {
    name: "repay_return_price",
    unsigned: true,
    default: () => "'0'",
  })
  repayReturnPrice: string;

  @Column("char", { name: "flag_return", length: 1, default: () => "'A'" })
  flagReturn: string;

  @Column("datetime", {
    name: "queue_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  queueDate: Date;
}
