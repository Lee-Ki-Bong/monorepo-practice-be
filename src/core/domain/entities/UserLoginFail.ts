import { Column, Entity } from "typeorm";

@Entity("user_login_fail", { schema: "makeshop" })
export class UserLoginFail {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("tinyint", { name: "cnt", default: () => "'0'" })
  cnt: number;

  @Column("datetime", {
    name: "fail_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  failDate: Date;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", { name: "ip", length: 255 })
  ip: string;
}
