import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_log_rid", ["logRid"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Entity("smart_reserve_config_log", { schema: "makeshop" })
export class SmartReserveConfigLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "reservenum", length: 8 })
  reservenum: string;

  @Column("int", {
    primary: true,
    name: "apply_rid",
    unsigned: true,
    default: () => "'0'",
  })
  applyRid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "log_rid", unsigned: true })
  logRid: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", { name: "sub_id", length: 20 })
  subId: string;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;
}
