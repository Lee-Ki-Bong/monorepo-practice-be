import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_log_detail_idx", ["logDetailIdx"], {})
@Entity("event_upload_log_detail", { schema: "makeshop" })
export class EventUploadLogDetail {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ev_code", length: 20 })
  evCode: string;

  @Column("int", {
    primary: true,
    name: "ev_uid",
    unsigned: true,
    default: () => "'0'",
  })
  evUid: number;

  @Column("int", { name: "eu_idx", unsigned: true, default: () => "'0'" })
  euIdx: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("int", {
    primary: true,
    name: "log_idx",
    unsigned: true,
    default: () => "'0'",
  })
  logIdx: number;

  @PrimaryGeneratedColumn({
    type: "int",
    name: "log_detail_idx",
    unsigned: true,
  })
  logDetailIdx: number;

  @Column("enum", {
    name: "log_status",
    enum: ["", "S", "F"],
    default: () => "'F'",
  })
  logStatus: "" | "S" | "F";

  @Column("varchar", { name: "fail_desc", length: 255 })
  failDesc: string;
}
