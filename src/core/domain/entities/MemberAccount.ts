import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("login_date", ["mcLastLoginDate"], {})
@Entity("member_account", { schema: "makeshop" })
export class MemberAccount {
  @PrimaryGeneratedColumn({ type: "int", name: "mc_key", unsigned: true })
  mcKey: number;

  @Column("varchar", { name: "mc_id", length: 20 })
  mcId: string;

  @Column("varchar", { name: "mc_password", length: 200 })
  mcPassword: string;

  @Column("enum", {
    name: "mc_status",
    enum: ["", "NORMAL", "DORMANT", "WITHDRAW"],
    default: () => "'NORMAL'",
  })
  mcStatus: "" | "NORMAL" | "DORMANT" | "WITHDRAW";

  @Column("int", {
    name: "mc_skip_password_cnt",
    unsigned: true,
    default: () => "'0'",
  })
  mcSkipPasswordCnt: number;

  @Column("datetime", {
    name: "mc_join_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mcJoinDate: Date;

  @Column("datetime", {
    name: "mc_last_login_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mcLastLoginDate: Date;

  @Column("datetime", {
    name: "mc_change_passwd_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mcChangePasswdDate: Date;

  @Column("datetime", {
    name: "mc_skip_passwd_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mcSkipPasswdDate: Date;

  @Column("varchar", { name: "reseller_id", length: 20 })
  resellerId: string;
}
