import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_lognum", ["lognum"], {})
@Entity("order_handle_log", { schema: "makeshop" })
export class OrderHandleLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "orderbasket_uid",
    unsigned: true,
    default: () => "'0'",
  })
  orderbasketUid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "lognum", unsigned: true })
  lognum: number;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;
}
