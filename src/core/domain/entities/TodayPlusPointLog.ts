import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pl_uid", ["plUid"], {})
@Entity("today_plus_point_log", { schema: "makeshop" })
export class TodayPlusPointLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { primary: true, name: "sub_id", length: 30 })
  subId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pl_uid", unsigned: true })
  plUid: number;

  @Column("varchar", { name: "type", length: 10 })
  type: string;

  @Column("varchar", { name: "pointsaveidx", length: 20 })
  pointsaveidx: string;

  @Column("varchar", { name: "amount", length: 26 })
  amount: string;

  @Column("varchar", { name: "memo", length: 255 })
  memo: string;

  @Column("mediumtext", { name: "return_data" })
  returnData: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
