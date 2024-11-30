import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_entry_uid", ["entryUid"], {})
@Entity("entry_event", { schema: "makeshop" })
export class EntryEvent {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({
    type: "mediumint",
    name: "entry_uid",
    unsigned: true,
  })
  entryUid: number;

  @Column("enum", {
    name: "entry_use",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  entryUse: "" | "Y" | "N";

  @Column("datetime", {
    name: "entry_sdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  entrySdate: Date;

  @Column("datetime", {
    name: "entry_edate",
    default: () => "'0000-00-00 00:00:00'",
  })
  entryEdate: Date;

  @Column("date", { name: "entry_order_sdate", default: () => "'0000-00-00'" })
  entryOrderSdate: string;

  @Column("date", { name: "entry_order_edate", default: () => "'0000-00-00'" })
  entryOrderEdate: string;

  @Column("int", {
    name: "entry_order_amount",
    unsigned: true,
    default: () => "'0'",
  })
  entryOrderAmount: number;

  @Column("varchar", { name: "entry_msg", length: 255 })
  entryMsg: string;

  @Column("datetime", {
    name: "date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateInsert: Date;

  @Column("datetime", {
    name: "date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateUpdate: Date;

  @Column("varchar", { name: "update_ip", length: 20 })
  updateIp: string;

  @Column("varchar", { name: "update_id", length: 12 })
  updateId: string;
}
