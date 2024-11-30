import { Column, Entity } from "typeorm";

@Entity("webhook_event_send_log", { schema: "makeshop" })
export class WebhookEventSendLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "company_id",
    unsigned: true,
    default: () => "'0'",
  })
  companyId: number;

  @Column("datetime", {
    primary: true,
    name: "check_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  checkDate: Date;

  @Column("mediumtext", { name: "event" })
  event: string;

  @Column("int", { name: "start_id", unsigned: true, default: () => "'0'" })
  startId: number;

  @Column("varchar", {
    primary: true,
    name: "page",
    length: 10,
    default: () => "'1'",
  })
  page: string;
}
