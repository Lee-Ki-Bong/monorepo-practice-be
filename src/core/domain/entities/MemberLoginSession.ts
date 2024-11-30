import { Column, Entity, Index } from "typeorm";

@Index("ml_id", ["mlId"], {})
@Entity("member_login_session", { schema: "makeshop" })
export class MemberLoginSession {
  @Column("int", { primary: true, name: "mc_key", default: () => "'0'" })
  mcKey: number;

  @Column("varchar", { name: "ml_id", length: 100 })
  mlId: string;

  @Column("varchar", { name: "ml_device", length: 10, default: () => "'WEB'" })
  mlDevice: string;

  @Column("varchar", { name: "ml_ip", length: 20 })
  mlIp: string;

  @Column("datetime", {
    name: "ml_work_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mlWorkDate: Date;

  @Column("datetime", {
    name: "ml_login_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mlLoginDate: Date;
}
