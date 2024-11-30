import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_change_uid", ["changeUid"], {})
@Index("idx_date", ["adminuser", "changeDate"], {})
@Index("idx_id", ["adminuser", "id"], {})
@Entity("user_dormant_change", { schema: "makeshop" })
export class UserDormantChange {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "change_uid", unsigned: true })
  changeUid: number;

  @Column("varchar", { name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @Column("varchar", { name: "ip", length: 20 })
  ip: string;

  @Column("datetime", {
    name: "change_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  changeDate: Date;
}
