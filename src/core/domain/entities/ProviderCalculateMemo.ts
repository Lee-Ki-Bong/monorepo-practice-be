import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pcm_id", ["pcmId"], {})
@Entity("provider_calculate_memo", { schema: "makeshop" })
export class ProviderCalculateMemo {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "pc_id",
    unsigned: true,
    default: () => "'0'",
  })
  pcId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "pcm_id", unsigned: true })
  pcmId: number;

  @Column("enum", {
    name: "write_type",
    enum: ["", "SHOP", "PROVIDER"],
    default: () => "'SHOP'",
  })
  writeType: "" | "SHOP" | "PROVIDER";

  @Column("varchar", { name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "subid", length: 20 })
  subid: string;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
