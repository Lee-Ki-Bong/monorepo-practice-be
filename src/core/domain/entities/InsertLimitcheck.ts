import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("insert_limitcheck", { schema: "makeshop" })
export class InsertLimitcheck {
  @PrimaryGeneratedColumn({ type: "int", name: "log_id", unsigned: true })
  logId: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "type", length: 30 })
  type: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("int", { name: "count", unsigned: true, default: () => "'0'" })
  count: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
