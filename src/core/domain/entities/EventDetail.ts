import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("admin_tmpkey", ["adminuser", "eventTmpKey"], {})
@Index("admin_uid", ["adminuser", "infoUid"], {})
@Index("idx_auto_detail_uid", ["detailUid"], {})
@Entity("event_detail", { schema: "makeshop" })
export class EventDetail {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "detail_uid", unsigned: true })
  detailUid: number;

  @Column("varchar", { primary: true, name: "event_tmp_key", length: 32 })
  eventTmpKey: string;

  @Column("int", { name: "info_uid", unsigned: true, default: () => "'0'" })
  infoUid: number;

  @Column("varchar", { name: "set_name", length: 255 })
  setName: string;

  @Column("varchar", { name: "set_value", length: 255 })
  setValue: string;

  @Column("mediumtext", { name: "set_text", nullable: true })
  setText: string | null;
}
