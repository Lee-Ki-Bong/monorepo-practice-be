import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("user_idx", ["adminuser", "userId"], {})
@Index("user_regdate", ["userId", "regDate"], {})
@Entity("usergroup_log", { schema: "makeshop" })
export class UsergroupLog {
  @PrimaryGeneratedColumn({ type: "int", name: "log_id", unsigned: true })
  logId: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { name: "old_code", length: 4 })
  oldCode: string;

  @Column("varchar", { name: "code", length: 4 })
  code: string;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("varchar", { name: "subid", length: 20 })
  subid: string;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
