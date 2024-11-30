import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "userId"], {})
@Entity("powerapp_logs", { schema: "makeshop" })
export class PowerappLogs {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "device_key", length: 40 })
  deviceKey: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;

  @Column("varchar", { name: "user_id_benefit", length: 20 })
  userIdBenefit: string;

  @Column("datetime", {
    name: "benefit_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  benefitDate: Date | null;

  @Column("varchar", { name: "recommend_user_id", length: 20 })
  recommendUserId: string;

  @Column("varchar", { name: "recommended_user_id", length: 20 })
  recommendedUserId: string;

  @Column("datetime", { name: "recommend_date", nullable: true })
  recommendDate: Date | null;

  @Column("datetime", { name: "install_date", nullable: true })
  installDate: Date | null;
}
