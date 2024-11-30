import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("reg_date", ["adminuser", "regDate"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("exituser_log", { schema: "makeshop" })
export class ExituserLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'1001-01-01 00:00:00'",
  })
  regDate: Date;
}
