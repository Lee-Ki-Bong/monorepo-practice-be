import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Entity("facebook_catalog_batch_log", { schema: "makeshop" })
export class FacebookCatalogBatchLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "catalog_id", length: 20 })
  catalogId: string;

  @Column("varchar", { name: "handles", nullable: true, length: 255 })
  handles: string | null;

  @Column("mediumtext", { name: "validation_status", nullable: true })
  validationStatus: string | null;

  @Column("enum", {
    name: "status",
    enum: ["", "dispatched", "started", "finished", "canceled", "error"],
    default: () => "'dispatched'",
  })
  status: "" | "dispatched" | "started" | "finished" | "canceled" | "error";

  @Column("mediumtext", { name: "data", nullable: true })
  data: string | null;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
