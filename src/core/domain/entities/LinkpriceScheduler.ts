import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Index("scheduler_type_id", ["adminuser", "schedulerType", "schedulerId"], {})
@Index("send_type", ["adminuser", "sendType"], {})
@Entity("linkprice_scheduler", { schema: "makeshop" })
export class LinkpriceScheduler {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("enum", {
    name: "scheduler_type",
    enum: ["", "user", "order"],
    default: () => "'user'",
  })
  schedulerType: "" | "user" | "order";

  @Column("int", { name: "scheduler_id", unsigned: true, default: () => "'0'" })
  schedulerId: number;

  @Column("enum", {
    name: "send_type",
    enum: ["", "Y", "N", "F"],
    default: () => "'N'",
  })
  sendType: "" | "Y" | "N" | "F";

  @Column("varchar", {
    name: "send_error_message",
    nullable: true,
    length: 100,
  })
  sendErrorMessage: string | null;

  @Column("datetime", {
    name: "send_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  sendDate: Date;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
