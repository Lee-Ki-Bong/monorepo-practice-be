import { Column, Entity } from "typeorm";

@Entity("remote_post_address_config", { schema: "makeshop" })
export class RemotePostAddressConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "provider",
    unsigned: true,
    default: () => "'0'",
  })
  provider: number;

  @Column("enum", { name: "remote_use", nullable: true, enum: ["", "Y", "N"] })
  remoteUse: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "area_type",
    enum: ["", "2", "3"],
    default: () => "'2'",
  })
  areaType: "" | "2" | "3";

  @Column("int", { name: "area2_price", default: () => "'0'" })
  area2Price: number;

  @Column("int", { name: "area3_price", default: () => "'0'" })
  area3Price: number;

  @Column("varchar", { name: "area2_minimum", length: 10 })
  area2Minimum: string;

  @Column("varchar", { name: "area3_minimum", length: 10 })
  area3Minimum: string;
}
