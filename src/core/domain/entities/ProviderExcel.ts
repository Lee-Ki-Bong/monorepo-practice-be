import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pe_uid", ["peUid"], {})
@Index("uq_pe_title", ["adminuser", "peTitle"], { unique: true })
@Entity("provider_excel", { schema: "makeshop" })
export class ProviderExcel {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "provider_id", length: 20 })
  providerId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pe_uid", unsigned: true })
  peUid: number;

  @Column("varchar", { name: "pe_title", length: 50 })
  peTitle: string;

  @Column("mediumtext", { name: "pe_items" })
  peItems: string;

  @Column("datetime", { name: "mod_date", nullable: true })
  modDate: Date | null;
}
