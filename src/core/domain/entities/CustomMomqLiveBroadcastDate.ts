import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("stat_date", ["adminuser", "statDate", "statTime"], {})
@Entity("custom_momq_live_broadcast_date", { schema: "makeshop" })
export class CustomMomqLiveBroadcastDate {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("date", { name: "stat_date", default: () => "'0000-00-00'" })
  statDate: string;

  @Column("char", { name: "stat_time", length: 2, default: () => "'13'" })
  statTime: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
