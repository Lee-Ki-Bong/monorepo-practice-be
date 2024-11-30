import { Column, Entity, Index } from "typeorm";

@Index("adminpush", ["adminuser", "pushKey"], {})
@Index("adminuser", ["adminuser", "logDate"], {})
@Index("log_date", ["adminuser", "logDate"], {})
@Entity("powerapp_push_history", { schema: "makeshop" })
export class PowerappPushHistory {
  @Column("varchar", { name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { name: "device_key", length: 40 })
  deviceKey: string;

  @Column("varchar", { name: "push_key", length: 40 })
  pushKey: string;

  @Column("enum", {
    name: "push_benefit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pushBenefit: "" | "Y" | "N";

  @Column("mediumtext", { name: "push_benefit_content", nullable: true })
  pushBenefitContent: string | null;

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;
}
