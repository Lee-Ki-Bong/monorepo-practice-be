import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("admin_tmpkey", ["adminuser", "applyType", "eventTmpkey"], {})
@Index("admin_uid", ["adminuser", "applyType", "infoUid"], {})
@Index("idx_auto_seq", ["seq"], {})
@Entity("find_event_icon_info", { schema: "makeshop" })
export class FindEventIconInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "apply_type",
    enum: ["", "PC", "MOBILE"],
    default: () => "'PC'",
  })
  applyType: "" | "PC" | "MOBILE";

  @PrimaryGeneratedColumn({ type: "int", name: "seq", unsigned: true })
  seq: number;

  @Column("varchar", { primary: true, name: "event_tmpkey", length: 32 })
  eventTmpkey: string;

  @Column("int", { name: "info_uid", unsigned: true, default: () => "'0'" })
  infoUid: number;

  @Column("varchar", { name: "icon_name", length: 255 })
  iconName: string;
}
