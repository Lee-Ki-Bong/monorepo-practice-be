import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_no", ["no"], {})
@Entity("provider_notice", { schema: "makeshop" })
export class ProviderNotice {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "no", unsigned: true })
  no: number;

  @Column("varchar", { name: "subject", length: 255 })
  subject: string;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("varchar", { name: "file_attach", nullable: true, length: 255 })
  fileAttach: string | null;

  @Column("int", { name: "read_cnt", unsigned: true, default: () => "'0'" })
  readCnt: number;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("varchar", { name: "selected_code", nullable: true, length: 200 })
  selectedCode: string | null;

  @Column("enum", {
    name: "display",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  display: "" | "N" | "Y";

  @Column("enum", { name: "popup", enum: ["", "N", "Y"], default: () => "'N'" })
  popup: "" | "N" | "Y";

  @Column("enum", {
    name: "send_mail",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  sendMail: "" | "N" | "Y";

  @Column("varchar", {
    name: "selected_mail_code",
    nullable: true,
    length: 200,
  })
  selectedMailCode: string | null;
}
