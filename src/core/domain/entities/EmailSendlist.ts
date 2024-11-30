import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("email_sendlist", { schema: "makeshop" })
export class EmailSendlist {
  @PrimaryGeneratedColumn({ type: "int", name: "log_id", unsigned: true })
  logId: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 30 })
  code: string;

  @Column("varchar", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @Column("varchar", { name: "status", length: 10 })
  status: string;

  @Column("varchar", { name: "receive", nullable: true, length: 10 })
  receive: string | null;

  @Column("varchar", { name: "deltype", nullable: true, length: 16 })
  deltype: string | null;

  @Column("int", { name: "count", unsigned: true, default: () => "'0'" })
  count: number;

  @Column("varchar", { name: "filename", nullable: true, length: 100 })
  filename: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
