import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_user_uid", ["userUid"], {})
@Index("info_uid", ["adminuser", "infoUid"], {})
@Entity("event_user", { schema: "makeshop" })
export class EventUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "user_uid", unsigned: true })
  userUid: number;

  @Column("int", { name: "info_uid", unsigned: true, default: () => "'0'" })
  infoUid: number;

  @Column("varchar", { name: "user_id", length: 100 })
  userId: string;

  @Column("mediumtext", { name: "event_info", nullable: true })
  eventInfo: string | null;

  @Column("datetime", {
    name: "complate_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  complateDate: Date;

  @Column("enum", {
    name: "user_status",
    enum: ["", "Y", "C"],
    default: () => "'Y'",
  })
  userStatus: "" | "Y" | "C";
}
