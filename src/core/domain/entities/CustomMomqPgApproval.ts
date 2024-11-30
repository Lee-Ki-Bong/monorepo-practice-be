import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("idx_ordernum", ["adminuser", "ordernum"], {})
@Index("idx_search_date", ["adminuser", "searchDate"], {})
@Entity("custom_momq_pg_approval", { schema: "makeshop" })
export class CustomMomqPgApproval {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "mid", length: 10 })
  mid: string;

  @Column("varchar", { name: "tid", length: 40 })
  tid: string;

  @Column("varchar", { name: "paymethod", length: 14 })
  paymethod: string;

  @Column("varchar", { name: "approval_date", length: 8 })
  approvalDate: string;

  @Column("varchar", { name: "cancel_date", length: 8 })
  cancelDate: string;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;

  @Column("varchar", { name: "pg_state", length: 10 })
  pgState: string;

  @Column("int", { name: "discount_price", default: () => "'0'" })
  discountPrice: number;

  @Column("varchar", { name: "discount_title", length: 50 })
  discountTitle: string;

  @Column("varchar", { name: "search_date", length: 8 })
  searchDate: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
