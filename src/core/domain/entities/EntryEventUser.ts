import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("entry_qty", ["adminuser", "entryUid", "entryQty"], {})
@Index("idx_auto_entry_user_uid", ["entryUserUid"], {})
@Index("uni_userid", ["adminuser", "entryUid", "entryUserUid", "entryUserid"], {
  unique: true,
})
@Index("userid", ["adminuser", "entryUid", "entryUserid"], {})
@Entity("entry_event_user", { schema: "makeshop" })
export class EntryEventUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("smallint", {
    primary: true,
    name: "entry_uid",
    default: () => "'0'",
  })
  entryUid: number;

  @PrimaryGeneratedColumn({
    type: "int",
    name: "entry_user_uid",
    unsigned: true,
  })
  entryUserUid: number;

  @Column("varchar", { name: "entry_userid", length: 20 })
  entryUserid: string;

  @Column("smallint", { name: "entry_qty", default: () => "'0'" })
  entryQty: number;

  @Column("datetime", {
    name: "entry_date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  entryDateInsert: Date;

  @Column("varchar", { name: "entry_ip", length: 20 })
  entryIp: string;

  @Column("datetime", {
    name: "entry_date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  entryDateUpdate: Date;

  @Column("varchar", { name: "entry_update_id", length: 12 })
  entryUpdateId: string;
}
