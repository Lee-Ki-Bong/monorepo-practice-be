import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_rb_uid", ["rbUid"], {})
@Entity("oo_for_rollback", { schema: "makeshop" })
export class OoForRollback {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @PrimaryGeneratedColumn({ type: "int", name: "rb_uid" })
  rbUid: number;

  @Column("varchar", { name: "user_id", nullable: true, length: 20 })
  userId: string | null;

  @Column("varchar", { name: "rb_type", length: 8 })
  rbType: string;

  @Column("varchar", { name: "coupon_num", nullable: true, length: 8 })
  couponNum: string | null;

  @Column("int", { name: "rb_reserve", nullable: true })
  rbReserve: number | null;

  @Column("varchar", { name: "rb_title", nullable: true, length: 200 })
  rbTitle: string | null;
}
