import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email", ["adminuser", "email"], { unique: true })
@Index("idx_auto_uid", ["uid"], {})
@Index("order_state", ["adminuser", "orderState"], {})
@Index("ordernum", ["adminuser", "ordernum"], {})
@Entity("user_special_product", { schema: "makeshop" })
export class UserSpecialProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "email", nullable: true, length: 35 })
  email: string | null;

  @Column("varchar", { name: "hname", length: 30 })
  hname: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("char", { name: "order_state", length: 1, default: () => "'N'" })
  orderState: string;

  @Column("datetime", { name: "date_insert", nullable: true })
  dateInsert: Date | null;
}
