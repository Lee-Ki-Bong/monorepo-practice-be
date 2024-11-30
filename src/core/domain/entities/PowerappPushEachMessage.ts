import { Column, Entity, Index } from "typeorm";

@Index("msg_status", ["adminuser", "status"], {})
@Index("send_date", ["adminuser", "date"], {})
@Index("update_date", ["adminuser", "updateDate"], {})
@Entity("powerapp_push_each_message", { schema: "makeshop" })
export class PowerappPushEachMessage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "u_uid",
    unsigned: true,
    default: () => "'0'",
  })
  uUid: number;

  @Column("int", {
    primary: true,
    name: "p_uid",
    unsigned: true,
    default: () => "'0'",
  })
  pUid: number;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;

  @Column("varchar", { name: "image_url", nullable: true, length: 255 })
  imageUrl: string | null;

  @Column("varchar", { name: "link_url", nullable: true, length: 255 })
  linkUrl: string | null;

  @Column("varchar", { name: "user_id", nullable: true, length: 30 })
  userId: string | null;

  @Column("varchar", { name: "device_key", nullable: true, length: 255 })
  deviceKey: string | null;

  @Column("enum", {
    name: "status",
    enum: ["", "Y", "N", "P", "F"],
    default: () => "'N'",
  })
  status: "" | "Y" | "N" | "P" | "F";

  @Column("varchar", { name: "tag_value", length: 255 })
  tagValue: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;
}
