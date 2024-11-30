import { Column, Entity } from "typeorm";

@Entity("api_expired_data", { schema: "makeshop" })
export class ApiExpiredData {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "service_type", length: 20 })
  serviceType: string;

  @Column("datetime", {
    name: "expired_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  expiredDate: Date;

  @Column("mediumtext", { name: "api_key" })
  apiKey: string;

  @Column("varchar", { name: "service_id", nullable: true, length: 50 })
  serviceId: string | null;
}
