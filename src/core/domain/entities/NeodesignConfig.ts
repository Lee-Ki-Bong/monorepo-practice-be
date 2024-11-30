import { Column, Entity } from "typeorm";

@Entity("neodesign_config", { schema: "makeshop" })
export class NeodesignConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "config_type", length: 20 })
  configType: string;

  @Column("mediumtext", { name: "dgn_config", nullable: true })
  dgnConfig: string | null;
}
