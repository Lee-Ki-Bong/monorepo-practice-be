import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("admin_tmpkey", ["adminuser", "eventTmpkey"], {})
@Index("admin_uid", ["adminuser", "infoUid"], {})
@Index("idx_auto_seq", ["seq"], {})
@Entity("find_event_page_info", { schema: "makeshop" })
export class FindEventPageInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "seq", unsigned: true })
  seq: number;

  @Column("varchar", { primary: true, name: "event_tmpkey", length: 32 })
  eventTmpkey: string;

  @Column("int", { name: "info_uid", unsigned: true, default: () => "'0'" })
  infoUid: number;

  @Column("varchar", { name: "page_name", length: 255 })
  pageName: string;
}
