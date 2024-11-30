import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser_date", ["adminuser", "regDate"], {})
@Index("idx_auto_id", ["id"], {})
@Index("status", ["adminuser", "regDate", "status"], {})
@Index("type", ["adminuser", "webhookType"], {})
@Entity("webhook_event", { schema: "makeshop" })
export class WebhookEvent {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "webhook_type", length: 20 })
  webhookType: string;

  @Column("mediumtext", { name: "webhook_value" })
  webhookValue: string;

  @Column("char", { name: "status", length: 1, default: () => "'N'" })
  status: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
