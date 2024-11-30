import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser_date", ["adminuser", "loginDate"], {})
@Index("adminuser_user_id", ["adminuser", "userId"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("user_login_date", { schema: "makeshop" })
export class UserLoginDate {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("datetime", {
    name: "login_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  loginDate: Date;
}
