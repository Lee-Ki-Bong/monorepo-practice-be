import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("change_date", ["adminuser", "changeDate"], {})
@Index("idx_auto_idx", ["idx"], {})
@Entity("usercoupon_change_history", { schema: "makeshop" })
export class UsercouponChangeHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("int", {
    primary: true,
    name: "number",
    unsigned: true,
    default: () => "'1'",
  })
  number: number;

  @PrimaryGeneratedColumn({ type: "int", name: "idx", unsigned: true })
  idx: number;

  @Column("varchar", { name: "change_type", nullable: true, length: 10 })
  changeType: string | null;

  @Column("datetime", {
    name: "change_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  changeDate: Date;
}
