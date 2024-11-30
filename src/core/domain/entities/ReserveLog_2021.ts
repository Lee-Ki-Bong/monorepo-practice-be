import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Index("user", ["adminuser", "userId"], {})
@Entity("reserve_log_2021", { schema: "makeshop" })
export class ReserveLog_2021 {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("int", { name: "reserve", nullable: true, default: () => "'0'" })
  reserve: number | null;

  @Column("enum", {
    name: "tbl_name",
    enum: ["", "reserve", "user", "review"],
    default: () => "'reserve'",
  })
  tblName: "" | "reserve" | "user" | "review";

  @Column("varchar", { name: "type", nullable: true, length: 30 })
  type: string | null;

  @Column("varchar", {
    name: "ip",
    nullable: true,
    length: 15,
    default: () => "'000.000.000.000'",
  })
  ip: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;
}
