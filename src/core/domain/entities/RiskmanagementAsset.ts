import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("asset_code", ["assetCode"], { unique: true })
@Entity("riskmanagement_asset", { schema: "makeshop" })
export class RiskmanagementAsset {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "asset_code", unique: true, length: 20 })
  assetCode: string;

  @Column("varchar", { name: "asset_class", length: 8 })
  assetClass: string;

  @Column("varchar", { name: "asset_name", length: 50 })
  assetName: string;

  @Column("varchar", { name: "use", length: 50 })
  use: string;

  @Column("int", { name: "cnt", default: () => "'0'" })
  cnt: number;

  @Column("varchar", { name: "model", length: 50 })
  model: string;

  @Column("varchar", { name: "made", length: 50 })
  made: string;

  @Column("varchar", { name: "url", length: 100 })
  url: string;

  @Column("varchar", { name: "os", length: 50 })
  os: string;

  @Column("varchar", { name: "version", length: 50 })
  version: string;

  @Column("varchar", { name: "ip", length: 39 })
  ip: string;

  @Column("varchar", { name: "mac", length: 50 })
  mac: string;

  @Column("varchar", { name: "location", length: 100 })
  location: string;

  @Column("varchar", { name: "archive", length: 50 })
  archive: string;

  @Column("int", { name: "confidential", default: () => "'0'" })
  confidential: number;

  @Column("int", { name: "integrity", default: () => "'0'" })
  integrity: number;

  @Column("int", { name: "availability", default: () => "'0'" })
  availability: number;

  @Column("longtext", { name: "text" })
  text: string;

  @Column("int", { name: "staff_name_id", default: () => "'0'" })
  staffNameId: number;

  @Column("int", { name: "asset_score", nullable: true })
  assetScore: number | null;
}
