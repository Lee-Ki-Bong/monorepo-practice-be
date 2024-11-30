import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_trans_rid", ["transRid"], {})
@Entity("smart_reserve_trans_user", { schema: "makeshop" })
export class SmartReserveTransUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "trans_rid", unsigned: true })
  transRid: number;

  @Column("int", { name: "reserve", default: () => "'0'" })
  reserve: number;

  @Column("datetime", {
    name: "trans_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  transDate: Date;

  @Column("datetime", {
    name: "expire_date",
    default: () => "'9999-12-31 23:59:59'",
  })
  expireDate: Date;
}
