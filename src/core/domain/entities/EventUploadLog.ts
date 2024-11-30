import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_log_idx", ["logIdx"], {})
@Entity("event_upload_log", { schema: "makeshop" })
export class EventUploadLog {
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

  @PrimaryGeneratedColumn({ type: "int", name: "log_idx", unsigned: true })
  logIdx: number;

  @Column("varchar", { name: "upload_file_name", length: 255 })
  uploadFileName: string;

  @Column("int", { name: "upload_count", unsigned: true, default: () => "'0'" })
  uploadCount: number;

  @Column("int", {
    name: "upload_selection",
    unsigned: true,
    default: () => "'0'",
  })
  uploadSelection: number;

  @Column("int", {
    name: "upload_success",
    unsigned: true,
    default: () => "'0'",
  })
  uploadSuccess: number;

  @Column("int", { name: "upload_fail", unsigned: true, default: () => "'0'" })
  uploadFail: number;

  @Column("varchar", { name: "upload_ip", length: 15 })
  uploadIp: string;

  @Column("datetime", {
    name: "log_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  logDate: Date;
}
