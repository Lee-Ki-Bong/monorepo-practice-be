import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_log_uid", ["logUid"], {})
@Index("log_date", ["adminuser", "logDate"], {})
@Entity("nickname_log", { schema: "makeshop" })
export class NicknameLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "log_uid", unsigned: true })
  logUid: number;

  @Column("varchar", { name: "user_nickname", length: 50 })
  userNickname: string;

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;
}
