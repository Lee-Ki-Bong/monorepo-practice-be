import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("date", ["mlDate"], {})
@Index("mc_key", ["mcKey"], {})
@Entity("member_login_history", { schema: "makeshop" })
export class MemberLoginHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "ml_uid", unsigned: true })
  mlUid: number;

  @Column("int", { name: "mc_key", default: () => "'0'" })
  mcKey: number;

  @Column("varchar", { name: "ml_id", length: 100 })
  mlId: string;

  @Column("varchar", { name: "ml_device", length: 10, default: () => "'WEB'" })
  mlDevice: string;

  @Column("varchar", { name: "ml_ip", length: 20 })
  mlIp: string;

  @Column("varchar", { name: "ml_type", length: 100 })
  mlType: string;

  @Column("datetime", {
    name: "ml_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mlDate: Date;
}
