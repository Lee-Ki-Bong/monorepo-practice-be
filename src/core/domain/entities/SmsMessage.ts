import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("sms_message", { schema: "makeshop" })
export class SmsMessage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("mediumtext", { name: "message", nullable: true })
  message: string | null;

  @Column("varchar", { name: "sms_type", nullable: true, length: 100 })
  smsType: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;
}
