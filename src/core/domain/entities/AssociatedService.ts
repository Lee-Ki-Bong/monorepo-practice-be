import { Column, Entity } from "typeorm";

@Entity("associated_service", { schema: "makeshop" })
export class AssociatedService {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "service_type", length: 20 })
  serviceType: string;

  @Column("varchar", { name: "service_id", length: 50 })
  serviceId: string;

  @Column("mediumtext", { name: "service_url", nullable: true })
  serviceUrl: string | null;

  @Column("varchar", { name: "service_code", length: 100 })
  serviceCode: string;

  @Column("mediumtext", { name: "profile_data", nullable: true })
  profileData: string | null;

  @Column("mediumtext", { name: "api_key" })
  apiKey: string;

  @Column("char", { name: "status", length: 1, default: () => "'Y'" })
  status: string;
}
