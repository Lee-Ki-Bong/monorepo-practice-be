import { Column, Entity } from "typeorm";

@Entity("adminuser_config", { schema: "makeshop" })
export class AdminuserConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "config_name", length: 50 })
  configName: string;

  @Column("longtext", { name: "config_value", nullable: true })
  configValue: string | null;
}
