import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sms_sendlist", { schema: "makeshop" })
export class SmsSendlist {
  @PrimaryGeneratedColumn({ type: "int", name: "log_id", unsigned: true })
  logId: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "status", length: 10 })
  status: string;

  @Column("char", { name: "msg_type", length: 3 })
  msgType: string;

  @Column("mediumtext", { name: "message" })
  message: string;

  @Column("int", { name: "total_count", unsigned: true, default: () => "'0'" })
  totalCount: number;

  @Column("int", { name: "max_count", unsigned: true, default: () => "'0'" })
  maxCount: number;

  @Column("varchar", { name: "block_tel", nullable: true, length: 14 })
  blockTel: string | null;

  @Column("varchar", { name: "return_tel", nullable: true, length: 14 })
  returnTel: string | null;

  @Column("char", { name: "is_ad", length: 3 })
  isAd: string;

  @Column("char", { name: "is_nospam", length: 3 })
  isNospam: string;

  @Column("varchar", { name: "filename", nullable: true, length: 100 })
  filename: string | null;

  @Column("varchar", { name: "send_date", nullable: true, length: 14 })
  sendDate: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
