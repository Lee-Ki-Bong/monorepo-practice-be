import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("queue_state_date", ["adminuser", "queueState", "updateDate"], {})
@Index("queue_state_type_detail", ["adminuser", "queueState", "queueType"], {})
@Entity("custom_queue", { schema: "makeshop" })
export class CustomQueue {
  @PrimaryGeneratedColumn({ type: "int", name: "queue_uid", unsigned: true })
  queueUid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "queue_state",
    enum: ["", "wait", "doing", "done", "fail"],
    default: () => "'wait'",
  })
  queueState: "" | "wait" | "doing" | "done" | "fail";

  @Column("varchar", {
    name: "queue_type",
    length: 20,
    default: () => "'order'",
  })
  queueType: string;

  @Column("varchar", { name: "queue_detail", nullable: true, length: 50 })
  queueDetail: string | null;

  @Column("varchar", { name: "queue_add", nullable: true, length: 255 })
  queueAdd: string | null;

  @Column("mediumtext", { name: "queue_log", nullable: true })
  queueLog: string | null;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
