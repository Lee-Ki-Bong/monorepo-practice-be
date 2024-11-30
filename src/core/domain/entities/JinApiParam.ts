import { Column, Entity } from "typeorm";

@Entity("jin_api_param", { schema: "makeshop" })
export class JinApiParam {
  @Column("int", {
    primary: true,
    name: "api_id",
    unsigned: true,
    default: () => "'0'",
  })
  apiId: number;

  @Column("varchar", { primary: true, name: "api_key", length: 100 })
  apiKey: string;

  @Column("varchar", { name: "api_value", nullable: true, length: 255 })
  apiValue: string | null;

  @Column("varchar", { name: "api_key_name", nullable: true, length: 100 })
  apiKeyName: string | null;

  @Column("mediumtext", { name: "api_key_desc", nullable: true })
  apiKeyDesc: string | null;

  @Column("varchar", { name: "api_key_type", nullable: true, length: 50 })
  apiKeyType: string | null;
}
